import React, { useRef } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SongsPage from './pages/SongsPage';
import AddSongForm from './components/AddSongForm';
import Details from './components/Details';
import { Audio } from './components/Audio';

function App() {
    return (
        <div className="App bg-gray-50 relative">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<SongsPage />} />
                <Route path="/new-song" element={<AddSongForm />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
            <Audio />
        </div>
    );
}

export default App;
