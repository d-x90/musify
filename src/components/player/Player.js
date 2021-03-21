import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Slider } from '@material-ui/core';
import './Player.scss';
import PropTypes from 'prop-types';

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
        case 'KeyK':
          onPlayClicked();
          break;
        case 'KeyL':
          onSkipForwardClicked();
          break;
        case 'KeyJ':
          onSkipBackwardClicked();
          break;
        default:
        // None
      }
    };

    document.addEventListener('keydown', shortcutListener);

    return () => {
      document.removeEventListener('keydown', shortcutListener);
    };
  }, [onPlayClicked, onSkipBackwardClicked, onSkipForwardClicked]);

  useEffect(() => {
    if (isPlaying && song?.audioSource) {
      audioRef.current.play().catch((ignored) => console.debug('play error'));
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

    if (e.target.currentTime === e.target.duration) {
      setTimeout(onSkipForwardClicked, 1000);
    }
  };

  const dragHandler = (event, newValue) => {
    const targetTime = newValue;
    audioRef.current.currentTime = targetTime;
    setSongInfo({
      ...songInfo,
      currentTime: targetTime,
    });
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p className="no-select">{getFormattedTime(songInfo.currentTime)}</p>
        <Slider
          className="slider"
          min={0}
          max={songInfo.duration || 0}
          scale={(x) => x}
          value={songInfo.currentTime || 0}
          onChange={dragHandler}
          color="secondary"
        />
        <p className="no-select">{getFormattedTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          tabIndex="2"
          className="skip-back-btn"
          icon={faAngleLeft}
          onClick={onSkipBackwardClicked}
          onKeyDown={(e) => e.code === 'Space' && onSkipBackwardClicked()}
        />
        <FontAwesomeIcon
          tabIndex="3"
          className="play-btn"
          onClick={onPlayClicked}
          onKeyDown={(e) => e.code === 'Space' && onPlayClicked()}
          icon={isPlaying && song ? faPause : faPlay}
        />
        <FontAwesomeIcon
          tabIndex="4"
          className="skip-forward-btn"
          icon={faAngleRight}
          onClick={onSkipForwardClicked}
          onKeyDown={(e) => e.code === 'Space' && onSkipForwardClicked()}
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

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  song: PropTypes.object,
  onSkipBackwardClicked: PropTypes.func.isRequired,
  onPlayClicked: PropTypes.func.isRequired,
  onSkipForwardClicked: PropTypes.func.isRequired,
};

export default Player;
