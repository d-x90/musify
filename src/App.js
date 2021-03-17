import { useEffect, useState } from 'react';
import './App.scss';
import Player from './components/player/Player';
import SongLibrary from './components/song-library/SongLibrary';
import Song from './components/song/Song';
import { fetchSongs } from './services/song-api';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');

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
    setCurrentSongIndex(
      currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1,
    );
  };

  const skipForwardHandler = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const playHandler = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: backgroundColor,
      }}
    >
      <div className="header">
        <h1 className="no-select">Musify</h1>
        <SongLibrary
          songs={songs}
          activeSongId={songs?.[currentSongIndex]?.id}
          onSongSelected={(songId) => {
            setCurrentSongIndex(songs.findIndex((s) => s.id === songId));
            setIsPlaying(true);
          }}
        />
      </div>

      <Song song={songs[currentSongIndex]} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        song={songs[currentSongIndex]}
        onSkipBackwardClicked={skipBackwardHandler}
        onPlayClicked={playHandler}
        onSkipForwardClicked={skipForwardHandler}
      />

      <div className="footer">
        <h3 className="no-select">Created by Dávid Horváth &copy; 2021</h3>
      </div>
    </div>
  );
}

export default App;
