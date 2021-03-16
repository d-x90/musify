const mockSongs = [
  {
    name: 'Who knows',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b27380873d54dde9a81963be71b2',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=10553',
    artist: ['Psalm Trees', 'Guillaume Muschalle'],
    colors: ['#FBF8EF', '#373832'],
    id: 10553,
  },
  {
    name: 'Quietly',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b273af23c3ac27e3e052a5f37139',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=8019',
    artist: ['blnkspc_'],
    colors: ['#EEA1EA', '#C19197'],
    id: 8019,
  },
  {
    name: 'ebb//flo',
    coverImage:
      'https://i.scdn.co/image/23d4bb38261aec7428f6b621a0db1a2b6ce35e9d',
    audioSource: ' https://mp3.chillhop.com/serve.php/?mp3=8741',
    artist: ['invention_'],
    colors: ['#05909D', '#8E5D72'],
    id: 8741,
  },
  {
    name: 'Soil',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b2737ba1bea501d32e1d0e464240',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=10254',
    artist: ['Philanthrope', 'Guillaume Muschalle'],
    colors: ['#CA463D', '#383D26'],
    id: 10254,
  },
];

export function fetchSongs() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(mockSongs), 40);
  });
}
