import React, { useEffect, useState } from 'react';
import LibrarySongItem from './library-song-item/LibrarySongItem';
import './SongLibrary.scss';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SongLibrary = ({ songs, activeSongId, onSongSelected }) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    const shortcutListener = (e) => {
      switch (e.code) {
        case 'Escape':
          setClosed(true);
          break;
        default:
          console.log(e);
      }
    };

    document.addEventListener('keydown', shortcutListener);

    return () => {
      document.removeEventListener('keydown', shortcutListener);
    };
  }, []);

  return (
    <>
      <div className={`library-overlay-container ${closed && 'closed'}`}>
        <div className="song-library">
          <div className="library-header">
            <h2>Library</h2>
            <FontAwesomeIcon icon={faTimes} onClick={() => setClosed(true)} />
          </div>
          <div className="library-song-container">
            {songs.map((song) => (
              <LibrarySongItem
                song={song}
                key={song.id}
                active={song.id === activeSongId}
                onClick={() => {
                  onSongSelected(song.id);
                }}
              />
            ))}
          </div>
        </div>
        <div className="drop-shadow" onClick={() => setClosed(true)}></div>
      </div>
      <Button
        library-button="true"
        className={`library-button ${closed ? 'visible' : 'invisible'}`}
        onClick={() => setClosed(false)}
      >
        Library
      </Button>
    </>
  );
};

export default SongLibrary;
