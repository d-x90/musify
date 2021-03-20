import { Button } from '@material-ui/core';
import React from 'react';
import './Nav.scss';
import PropTypes from 'prop-types';

const Nav = ({ isLibraryClosed, openLibrary }) => {
  return (
    <nav className="main-nav">
      <h1>Musify</h1>
      <Button
        className={`library-button ${
          isLibraryClosed ? 'visible' : 'invisible'
        }`}
        onClick={openLibrary}
      >
        Library
      </Button>
    </nav>
  );
};

Nav.propTypes = {
  isLibraryClosed: PropTypes.bool.isRequired,
  openLibrary: PropTypes.func.isRequired,
};

export default Nav;
