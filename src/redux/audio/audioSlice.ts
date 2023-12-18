import { createSlice } from '@reduxjs/toolkit';

const initialState: { isLoading: boolean } = {
    isLoading: true,
};

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        startAudio(state) {
            state.isLoading = true;
        },
        stopAudio(state) {
            state.isLoading = false;
        },
    },
});

export const { startAudio, stopAudio } = audioSlice.actions;
export default audioSlice.reducer;
