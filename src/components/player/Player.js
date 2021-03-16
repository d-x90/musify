import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import './Player.scss';

const Player = ({
  isPlaying,
  song,
  onSkipBackwardClicked,
  onPlayClicked,
  onSkipForwardClicked,
}) => {
  const audioRef = useRef();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    const shortcutListener = (e) => {
      switch (e.code) {
        case 'Space':
        case 'KeyK':
          onPlayClicked();
          break;
        case 'KeyL':
          //TODO
          break;
        default:
          console.log(e);
      }
    };

    document.addEventListener('keypress', shortcutListener);

    return () => {
      document.removeEventListener('keypress', shortcutListener);
    };
  }, [onPlayClicked]);

  useEffect(() => {
    if (isPlaying && song?.audioSource) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [song, isPlaying]);

  const getFormattedTime = (time) => {
    if (isNaN(time)) {
      return '0:00';
    }

    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const timerUpdateHandler = (e) => {
    setSongInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const dragHandler = (e) => {
    const targetTime = e.target.value;
    audioRef.current.currentTime = targetTime;
    setSongInfo({
      ...songInfo,
      currentTime: targetTime,
    });
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getFormattedTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getFormattedTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back-btn"
          icon={faAngleLeft}
          onClick={onSkipBackwardClicked}
        />
        <FontAwesomeIcon
          className="play-btn"
          onClick={onPlayClicked}
          icon={isPlaying && song ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward-btn"
          icon={faAngleRight}
          onClick={onSkipForwardClicked}
        />
        <audio
          ref={audioRef}
          src={song?.audioSource}
          onTimeUpdate={timerUpdateHandler}
          onLoadedMetadata={timerUpdateHandler}
        />
      </div>
    </div>
  );
};

export default Player;
