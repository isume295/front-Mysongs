import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

type Songs = {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
};

type InitialState = {
    songs: Songs[];
    isLoading: boolean;
    isSuccessful: boolean;
    isLoadingBtn: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    songs: [],
    isLoading: false,
    isSuccessful: false,
    isLoadingBtn: false,
    errMsg: '',
    error: false,
};
const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        // btn loading
        btnLoading: (state) => {
            state.isLoadingBtn = true;
        },
        // post song
        postSongPending: (state) => {
            state.isSuccessful = true;
        },
        postSongSuccess: (state, action) => {
            state.isSuccessful = false;
            state.songs.push(action.payload);
        },
        postSongFailure: (state, action) => {
            state.isSuccessful = false;
            state.error = true;
            state.errMsg = action.payload;
        },
        // get song
        getSongPending: (state) => {
            state.isLoading = true;
        },
        getSongSuccess: (state, action) => {
            state.isLoading = false;
            state.songs = action.payload;
        },
        getSongFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
        // update song
        updateSongPending: (state) => {
            state.isSuccessful = true;
            state.isLoadingBtn = true;
        },
        updateSongSuccess: (state, action) => {
            const updatedSong = action.payload;
            state.songs = state.songs.map((song) => {
                if (song._id === updatedSong._id) {
                    return updatedSong;
                }
                return song;
            });
        },
        updateSongFailure: (state, action) => {
            state.isLoading = false;
            state.isLoadingBtn = false;
            state.error = true;
            state.errMsg = action.payload;
        },

        // delete song
        deleteSongPending: (state) => {
            state.isSuccessful = false;
        },
        deleteSongSuccess: (state, action) => {
            state.isSuccessful = true;
            const deletedSongId = action.payload;
            state.songs = state.songs.filter((song) => song._id !== deletedSongId);
        },
        deleteSongFailure: (state, action) => {
            state.isSuccessful = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const {
    postSongPending,
    postSongSuccess,
    postSongFailure,
    getSongPending,
    getSongSuccess,
    getSongFailure,
    updateSongPending,
    updateSongSuccess,
    updateSongFailure,
    deleteSongFailure,
    deleteSongPending,
    deleteSongSuccess,
    btnLoading,
} = songSlice.actions;
export default songSlice.reducer;
