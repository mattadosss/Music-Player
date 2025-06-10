import { useState, useRef, useEffect } from 'react';

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
        <div className="min-h-screen bg-gray-900 text-white text-center">
            <header className="sm:flex sm:justify-between py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <a className="flex items-center space-x-6">
                                MUSIC-PLAYER
                            </a>
                        </div>

                    </div>
                </div>
            </header>
            <main className="py-8">
                <div className="max-w-md mx-auto my-5 p-5 bg-gray-800 rounded-lg">
                    {currentSongIndex !== null && (
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
                            <audio
                                ref={audioRef}
                                src={`/songs/${encodeURIComponent(songs[currentSongIndex])}`}
                                onEnded={playNextSong}
                            />
                        </div>
                    )}
                </div>

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
            <footer>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"/>
                    <div className="md:flex md:justify-between">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 w-full">
                            <div className="mb-6 md:mb-0">
                                <a className="flex items-center">
                                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white">MUSIC PLAYER</span>
                                </a>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="mb-6 text-2xl font-bold text-white">Legal matters</h2>
                                <ul className="text-gray-200 font-medium">
                                    <li>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="mb-6 text-2xl font-bold text-white">Resources</h2>
                                <ul className="text-gray-200 font-medium">
                                    <li className="mb-4">
                                        <a href="https://tailwindcss.com/"
                                           className="hover:text-blue-500 transition-colors duration-300">Tailwind
                                            CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="mb-6 text-2xl font-bold text-white">Team</h2>
                                <ul className="text-gray-200 font-medium">
                                    <li className="mb-4">
                                        <a href='https://github.com/Hari-42'
                                           className="hover:text-blue-500 transition-colors duration-300">Github -
                                            Hari-42</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href='https://github.com/mattadosss'
                                           className="hover:text-blue-500 transition-colors duration-300">Github -
                                            matadosss</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href='https://github.com/koskogo'
                                           className="hover:text-blue-500 transition-colors duration-300">Github -
                                            koskogo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"/>
                    <div className="flex items-center justify-center flex-wrap">
                        <span className="text-sm text-black-500 text-center">© 2025 All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;