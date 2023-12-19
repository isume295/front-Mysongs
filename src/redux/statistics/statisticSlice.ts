import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../baseURL';

type Statistics = {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
};

type InitialState = {
    statistics: Statistics[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

export const fetchStatistics = createAsyncThunk('statistics/fetchStatistics', async (thunkAPI) => {
    const url = `${baseURL}/statistics`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        return error;
    }
});

const initialState: InitialState = {
    statistics: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const statisticSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Statistics
            .addCase(fetchStatistics.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStatistics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.statistics.push(action.payload);
                console.log('this is ur state', state.statistics);
            })
            .addCase(fetchStatistics.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
                state.errMsg = action.payload;
            });
    },
});

export default statisticSlice.reducer;
