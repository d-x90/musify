import React from 'react';
import './LibrarySongItem.scss';
import PropTypes from 'prop-types';

const LibrarySongItem = ({ song, isActive, onClick }) => {
  return (
    <div
      className={`library-song-item ${isActive && 'active'}`}
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

LibrarySongItem.propTypes = {
  song: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LibrarySongItem;
