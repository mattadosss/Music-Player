import React, { createContext, useContext, useState } from 'react';

const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
    const [playlist, setPlaylist] = useState([]);

    const addToPlaylist = (songIndex) => {
        setPlaylist((prev) => [...prev, songIndex]);
    };

    const removeFromPlaylist = (songIndex) => {
        setPlaylist((prev) => prev.filter((idx) => idx !== songIndex));
    };

    return (
        <PlaylistContext.Provider value={{ playlist, addToPlaylist, removeFromPlaylist }}>
            {children}
        </PlaylistContext.Provider>
    );
}

export function usePlaylist() {
    return useContext(PlaylistContext);
} 