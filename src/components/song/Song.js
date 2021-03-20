import React from 'react';
import './Song.scss';
import PropTypes from 'prop-types';

const Song = ({ song }) => {
  return (
    <div className="song-container">
      <img className="no-select" src={song?.coverImage} alt={song?.name} />
      <h2>{song?.name || '-'}</h2>
      <h3>{song?.artist?.join(', ') || '-'}</h3>
    </div>
  );
};

Song.propTypes = {
  song: PropTypes.object,
};

export default Song;
