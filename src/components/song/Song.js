import React from 'react';
import './Song.scss';

const Song = ({ song }) => {
  return (
    <div className="song-container">
      <img className="no-select" src={song?.coverImage} alt={song?.name} />
      <h2>{song?.name || '-'}</h2>
      <h3>{song?.artist?.join(', ') || '-'}</h3>
    </div>
  );
};

export default Song;
