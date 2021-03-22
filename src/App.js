import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import './App.scss';
import Player from './components/player/Player';
import SongLibrary from './components/song-library/SongLibrary';
import Song from './components/song/Song';
import { fetchSongs } from './services/song-api';
import Nav from './components/nav/Nav';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isLibraryClosed, setIsLibraryClosed] = useState(true);

  useEffect(() => {
    fetchSongs().then((songsArray) => {
      setSongs(songsArray);
    });
  }, []);

  useEffect(() => {
    const degree = Math.random() * 100 + 'deg';
    setBackgroundColor(
      `linear-gradient(${degree}, ${songs[currentSongIndex]?.colors?.[0]} 0%, ${songs[currentSongIndex]?.colors?.[1]} 100%`,
    );
  }, [songs, currentSongIndex]);

  const skipBackwardHandler = () => {
    setCurrentSongIndex((prevCurrentSongIndex) =>
      prevCurrentSongIndex - 1 < 0
        ? songs.length - 1
        : prevCurrentSongIndex - 1,
    );
  };

  const skipForwardHandler = () => {
    setCurrentSongIndex(
      (prevCurrentSongIndex) => (prevCurrentSongIndex + 1) % songs.length,
    );
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: backgroundColor,
      }}
    >
      <Nav
        isLibraryClosed={isLibraryClosed}
        openLibrary={() => setIsLibraryClosed(false)}
      ></Nav>
      <SongLibrary
        isClosed={isLibraryClosed}
        closeLibrary={() => setIsLibraryClosed(true)}
        songs={songs}
        activeSongId={songs?.[currentSongIndex]?.id}
        onSongSelected={(songId) => {
          setCurrentSongIndex(songs.findIndex((s) => s.id === songId));
          setIsPlaying(true);
        }}
      />

      <Song song={songs[currentSongIndex]} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        song={songs[currentSongIndex]}
        onSkipBackwardClicked={skipBackwardHandler}
        onPlayClicked={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}
        onSkipForwardClicked={skipForwardHandler}
      />

      <div className="footer">
        <h3 className="no-select">Created by Dávid Horváth &copy; 2021</h3>
        <a
          href="https://www.linkedin.com/in/d-x90/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/d-x90/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default App;
