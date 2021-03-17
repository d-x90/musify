import React from 'react';
import './LibrarySongItem.scss';

const LibrarySongItem = ({ song, active, onClick }) => {
  return (
    <div
      className={`library-song-item ${active && 'active'}`}
      onClick={onClick}
    >
      <img className="no-select" src={song?.coverImage} alt={song?.name} />
      <div>
        <h2>{song?.name || '-'}</h2>
        <h3>{song?.artist?.join(', ') || '-'}</h3>
      </div>
    </div>
  );
};

export default LibrarySongItem;
