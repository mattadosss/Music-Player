import React from 'react';
import { Link } from 'react-router-dom';

const Base = ({ children }) => (
  <div className="min-h-screen bg-gray-900 text-white text-center">
    <header className="sm:flex sm:justify-between py-3">
      <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
        <div className="border-b relative flex h-16 items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <Link to="/" className="font-bold text-lg hover:text-blue-400 transition-colors">MUSIC-PLAYER</Link>
            <Link to="/playlistbuilder" className="text-base hover:text-blue-400 transition-colors">Playlist Builder</Link>
          </div>
        </div>
      </div>
    </header>
    {children}
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 w-full">
            <div className="mb-6 md:mb-0">
              <a className="flex items-center">
                <span className="self-center text-2xl font-bold whitespace-nowrap text-white">MUSIC PLAYER</span>
              </a>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-white">Legal matters</h2>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-white">Resources</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:text-blue-500 transition-colors duration-300">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-white">Team</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/Hari-42" className="hover:text-blue-500 transition-colors duration-300">
                    Github - Hari-42
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/mattadosss" className="hover:text-blue-500 transition-colors duration-300">
                    Github - matadosss
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/koskogo" className="hover:text-blue-500 transition-colors duration-300">
                    Github - koskogo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center flex-wrap">
          <span className="text-sm text-gray-500 text-center">© 2025 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </div>
);

export default Base; 