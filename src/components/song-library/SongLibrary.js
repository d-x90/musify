import React, { useEffect } from 'react';
import LibrarySongItem from './library-song-item/LibrarySongItem';
import './SongLibrary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SongLibrary = ({
  songs,
  activeSongId,
  onSongSelected,
  isClosed,
  closeLibrary,
}) => {
  useEffect(() => {
    const shortcutListener = (e) => {
      switch (e.code) {
        case 'Escape':
          closeLibrary();
          break;
        default:
          console.log(e);
      }
    };

    document.addEventListener('keydown', shortcutListener);

    return () => document.removeEventListener('keydown', shortcutListener);
  }, [closeLibrary]);

  return (
    <>
      <div className={`song-library ${isClosed && 'closed'}`}>
        <div className="library-header">
          <h2>Library</h2>
          <FontAwesomeIcon icon={faTimes} onClick={closeLibrary} />
        </div>
        <div className="library-song-container">
          {songs.map((song) => (
            <LibrarySongItem
              song={song}
              key={song.id}
              isActive={song.id === activeSongId}
              onClick={() => {
                onSongSelected(song.id);
              }}
            />
          ))}
        </div>
      </div>
      <div
        className={`library-drop-shadow ${isClosed && 'closed'}`}
        onClick={closeLibrary}
      ></div>
    </>
  );
};

SongLibrary.propTypes = {
  songs: PropTypes.array.isRequired,
  activeSongId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSongSelected: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
  closeLibrary: PropTypes.func.isRequired,
};

export default SongLibrary;
