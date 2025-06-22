import React from 'react';
import { usePlaylist } from '../store/playlist';

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const PlaylistEditor = ({ songs }) => {
    const { playlist, removeFromPlaylist, setPlaylist } = usePlaylist();

    const moveSong = (from, to) => {
        if (to < 0 || to >= playlist.length) return;
        const newPlaylist = [...playlist];
        const [moved] = newPlaylist.splice(from, 1);
        newPlaylist.splice(to, 0, moved);
        setPlaylist(newPlaylist);
    };

    const handleShuffle = () => {
        setPlaylist(shuffleArray(playlist));
    };

    return (
        <div className="max-w-2xl mx-auto my-5">
            <h2 className="text-xl font-bold mb-4">Playlist Editor</h2>
            <div className="mb-4 flex justify-end">
                <button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                    onClick={handleShuffle}
                    disabled={playlist.length < 2}
                >
                    Shuffle Playlist
                </button>
            </div>
            {playlist.length === 0 ? (
                <p>Your playlist is empty.</p>
            ) : (
                <ul className="space-y-2">
                    {playlist.map((songIndex, idx) => (
                        <li
                            key={idx}
                            className="p-3 rounded bg-gray-800 flex items-center justify-between"
                        >
                            <span>{songs[songIndex]?.replace('.mp3', '') || 'Unknown Song'}</span>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded"
                                    onClick={() => moveSong(idx, idx - 1)}
                                    disabled={idx === 0}
                                >
                                    ↑
                                </button>
                                <button
                                    className="px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded"
                                    onClick={() => moveSong(idx, idx + 1)}
                                    disabled={idx === playlist.length - 1}
                                >
                                    ↓
                                </button>
                                <button
                                    className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                                    onClick={() => removeFromPlaylist(songIndex)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PlaylistEditor; 