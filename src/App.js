import { useState, useRef, useEffect } from 'react';
import Player from './components/Player';
import Base from './layout/Base';

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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
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

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const value = parseFloat(e.target.value);
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch((err) => {
                console.error("Playback failed:", err);
                setIsPlaying(false);
            });
        }
    }, [currentSongIndex]);

    return (
        <Base>
            <main className="py-8">
                <Player
                    currentSongIndex={currentSongIndex}
                    songs={songs}
                    isPlaying={isPlaying}
                    currentTime={currentTime}
                    duration={duration}
                    audioRef={audioRef}
                    togglePlayPause={togglePlayPause}
                    playNextSong={playNextSong}
                    playPreviousSong={playPreviousSong}
                    handleSeek={handleSeek}
                    formatTime={formatTime}
                    handleTimeUpdate={handleTimeUpdate}
                    handleLoadedMetadata={handleLoadedMetadata}
                />

                <div className="max-w-2xl mx-auto my-5">
                    <h2 className="text-xl font-bold mb-4">Available Songs</h2>
                    {songs.length === 0 ? (
                        <p>No songs found</p>
                    ) : (
                        <ul className="space-y-2">
                            {songs.map((song, index) => (
                                <li
                                    key={index}
                                    className={`p-3 rounded cursor-pointer transition-colors ${
                                        index === currentSongIndex
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-800 hover:bg-gray-700'
                                    }`}
                                    onClick={() => handleSongSelect(index)}
                                >
                                    {song.replace('.mp3', '')}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </Base>
    );
}

export default App;
