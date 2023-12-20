import React, { useRef } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SongsPage from './pages/SongsPage';
import AddSongForm from './components/AddSongForm';
import Details from './components/Details';
import { Audio } from './components/Audio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlbumsPage } from './pages/AlbumsPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { GenrePage } from './pages/GenrePage';

function App() {
    return (
        <div className="App bg-gray-50 h-screen relative">
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<SongsPage />} />
                <Route path="/new-song" element={<AddSongForm />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/albums" element={<AlbumsPage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/genre" element={<GenrePage />} />
            </Routes>
            <Audio />
        </div>
    );
}

export default App;
