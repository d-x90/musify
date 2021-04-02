const mockSongs = [
  {
    name: 'Mt. Elsewhere',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b273be62e4b7069a919936646728',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=12141',
    artist: ['Mama Aiuto'],
    colors: ['#2C9F97', '#B33C46'],
    id: 12141,
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
    name: 'Beyond Clouds',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b273ad6728c62a2f771a0c5af67d',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=6770',
    artist: ['Saib'],
    colors: ['#F1BFC2', '#7DBFCC'],
    id: 6770,
  },
  {
    name: 'Hidden Structures',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b2739dcdf7b88cb45810b19a7895',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=9912',
    artist: ['Leavv', 'Flitz&Suppe'],
    colors: ['#528791', '#DA9266'],
    id: 9912,
  },
  {
    name: 'Who knows',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b27380873d54dde9a81963be71b2',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=10553',
    artist: ['Psalm Trees', 'Guillaume Muschalle'],
    colors: ['#FBF5E5', '#796138'],
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
    name: 'Soil',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b2737ba1bea501d32e1d0e464240',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=10254',
    artist: ['Philanthrope', 'Guillaume Muschalle'],
    colors: ['#CA463D', '#383D26'],
    id: 10254,
  },
  {
    name: 'Home Court',
    coverImage:
      'https://i.scdn.co/image/ab67616d0000b273a6edabcbfde28527f5ea0db8',
    audioSource: 'https://mp3.chillhop.com/serve.php/?mp3=11232',
    artist: ['Blue Wednesday', 'Shopan'],
    colors: ['#6269BB', '#AA759A'],
    id: 11232,
  },
];

export function fetchSongs() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(mockSongs), 40);
  });
}
