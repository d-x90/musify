import { useEffect, useState } from 'react';
import './App.scss';
import Player from './components/player/Player';
import Song from './components/song/Song';
import { fetchSongs } from './services/song-api';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetchSongs().then((songsArray) => {
      setSongs(songsArray);
    });
  }, []);

  const skipBackwardHandler = () => {
    setCurrentSongIndex(
      currentSongIndex - 1 < 0 ? songs.length : currentSongIndex - 1,
    );
  };

  const skipForwardHandler = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const playHandler = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <h1>Musify</h1>
      <Song song={songs[currentSongIndex]} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        song={songs[currentSongIndex]}
        onSkipBackwardClicked={skipBackwardHandler}
        onPlayClicked={playHandler}
        onSkipForwardClicked={skipForwardHandler}
      />
    </div>
  );
}

export default App;
