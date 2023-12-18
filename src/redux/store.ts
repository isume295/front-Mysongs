import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './audio/audioSlice';

interface RootState {
    audio: any;
}

const store = configureStore({
    reducer: {
        audio: audioReducer,
    },
});

export const audioSelector = (state: RootState) => state.audio;
export default store;
