import { useState } from 'react';
import './App.css';

function App() {
    const [songs] = useState([
        'Baby Bash - Suga Suga ft. Frankie J.mp3',
        'Blitzkrieg Bop (Remastered Version).mp3',
        'Bruno Mars - Runaway Baby [Official Lyric Video].mp3',
        'Calvin Harris - Feels (Official Video) ft. Pharrell Williams, Katy Perry, Big Sean.mp3',
        'Charlie Puth - Left And Right (feat. Jung Kook of BTS) [Official Video].mp3',
        'Daft Punk - Around The World (Official Video).mp3',
        'Diplo  SIDEPIECE - On My Mind (Official Audio).mp3',
        'Dr. Dre - The Next Episode ft. Snoop Dogg, Kurupt, Nate Dogg.mp3',
        'Escape (The Pina Colada Song).mp3',
        'Give It To Me.mp3',
        'Grover Washington Jr. - Just The Two of Us [HQ].mp3',
        'Ice Ice Baby.mp3',
        'Immigrant Song.mp3',
        'It Wasnt Me.mp3',
        'Its Not Unusual.mp3',
        'Kiss - I Was Made For Lovin You.mp3',
        'MC Hammer - U Cant Touch This (HQ).mp3',
        'Mr. Blue Sky.mp3',
        'Never Gonna Give You Up - Rick Astley (Lyrics).mp3',
        'Ryan Castro - Mujeriego (LetraLyrics).mp3'
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Music Player</h1>
            </header>
            <main>
                <div className="song-list">
                    <h2>Available Songs</h2>
                    {songs.length === 0 ? (
                        <p>No songs found</p>
                    ) : (
                        <ul>
                            {songs.map((song, index) => (
                                <li key={index}>
                                    <div className="song-item">
                                        <a
                                            href={`/songs/${encodeURIComponent(song)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="song-link"
                                        >
                                            {song.replace('.mp3', '')}
                                        </a>
                                        <audio controls className="audio-player">
                                            <source src={`/songs/${encodeURIComponent(song)}`} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;