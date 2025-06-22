import React from 'react';

const Player = ({
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
}) => {
    return (
        <div className="max-w-md mx-auto my-5 p-5 bg-gray-800 rounded-lg">
            {currentSongIndex !== null ? (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Now Playing</h2>
                    <p className="text-lg">{songs[currentSongIndex].replace('.mp3', '')}</p>
                    <div className="flex justify-center gap-5 mt-4">
                        <button
                            onClick={playPreviousSong}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            ⏮
                        </button>
                        <button
                            onClick={togglePlayPause}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            {isPlaying ? '⏸' : '⏵'}
                        </button>
                        <button
                            onClick={playNextSong}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            ⏭
                        </button>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="mt-4">
                        <input
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full accent-blue-500"
                        />
                        <div className="flex justify-between text-sm text-gray-300 mt-1">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    <audio
                        ref={audioRef}
                        src={`/songs/${encodeURIComponent(songs[currentSongIndex])}`}
                        onEnded={playNextSong}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                    />
                </div>
            ) : (
                <div className="text-center p-4">
                    <p>Select a song to start playing</p>
                </div>
            )}
        </div>
    );
};

export default Player;