import React from 'react';
import { usePlaylist } from '../store/playlist';

const Songs = ({ songs }) => {
    const { addToPlaylist } = usePlaylist();
    return (
        <div className="max-w-2xl mx-auto my-5">
            <h2 className="text-xl font-bold mb-4">All Songs</h2>
            {songs.length === 0 ? (
                <p>No songs found</p>
            ) : (
                <ul className="space-y-2">
                    {songs.map((song, index) => (
                        <li
                            key={index}
                            className="p-3 rounded bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors flex items-center justify-between"
                        >
                            <span>{song.replace('.mp3', '')}</span>
                            <button
                                className="ml-4 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => addToPlaylist(index)}
                            >
                                Add to Playlist
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Songs; 