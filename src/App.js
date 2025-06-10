import { useState, useRef, useEffect } from 'react';
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

    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleSongSelect = (index) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const playNextSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
        setIsPlaying(true);
    };

    const playPreviousSong = () => {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSongIndex(prevIndex);
        setIsPlaying(true);
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            }
        }
    }, [currentSongIndex, isPlaying]);

    return (
        <div className="App">
            <main>
                <div className="player-container">
                    {currentSongIndex !== null && (
                        <div className="now-playing">
                            <h2>Now Playing</h2>
                            <p>{songs[currentSongIndex].replace('.mp3', '')}</p>
                            <div className="player-controls">
                                <button onClick={playPreviousSong}>⏮</button>
                                <button onClick={togglePlayPause}>
                                    {isPlaying ? '⏸' : '⏵'}
                                </button>
                                <button onClick={playNextSong}>⏭</button>
                            </div>
                            <audio
                                ref={audioRef}
                                src={`/songs/${encodeURIComponent(songs[currentSongIndex])}`}
                                onEnded={playNextSong}
                            />
                        </div>
                    )}
                </div>

                <div className="song-list">
                    <h2>Available Songs</h2>
                    {songs.length === 0 ? (
                        <p>No songs found</p>
                    ) : (
                        <ul>
                            {songs.map((song, index) => (
                                <li
                                    key={index}
                                    className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                                    onClick={() => handleSongSelect(index)}
                                >
                                    {song.replace('.mp3', '')}
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