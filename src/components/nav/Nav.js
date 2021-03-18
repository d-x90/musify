import { Button } from '@material-ui/core';
import React from 'react';
import './Nav.scss';

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

export default Nav;
