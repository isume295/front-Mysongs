import React, { useEffect, useRef } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import audioSource from './assets/audio/Sappheiros - Embrace.mp3';
import { useSelector } from 'react-redux';
import { audioSelector } from './redux/store';
import { Statistics } from './components/Statistics';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SongsPage from './pages/SongsPage';

function App() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="App bg-gray-50 relative">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<SongsPage />} />
            </Routes>
            <audio ref={audioRef}>
                <source src={audioSource} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className="fixed right-5 z-10 bottom-5">
                <button className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center" onClick={handlePlay}>
                    Play Audio
                </button>
            </div>
        </div>
    );
}

export default App;
