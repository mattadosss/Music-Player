import React from 'react';
import Player from '../components/Player';
import { usePlaylist } from '../store/playlist';

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const Main = ({
    currentSongIndex,
    songs,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    togglePlayPause,
    playNextSong,
    playPreviousSong,
    handleSeek,
    formatTime,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSongSelect
}) => {
    const { playlist, setPlaylist } = usePlaylist();

    const handlePlayPlaylist = () => {
        if (playlist.length > 0) {
            handleSongSelect(playlist[0]);
        }
    };

    const handleShuffleAndPlay = () => {
        const shuffled = shuffleArray(songs.map((_, i) => i));
        setPlaylist(shuffled);
        if (shuffled.length > 0) {
            handleSongSelect(shuffled[0]);
        }
    };

    return (
        <main className="py-8">
            <div className="flex justify-center mb-6 space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                    onClick={handlePlayPlaylist}
                    disabled={playlist.length === 0}
                >
                    Play Playlist
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                    onClick={handleShuffleAndPlay}
                    disabled={songs.length === 0}
                >
                    Shuffle & Play
                </button>
            </div>
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
    );
};

export default Main; 