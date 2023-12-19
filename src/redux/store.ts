import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import audioReducer from './audio/audioSlice';
import statisticReducer from './statistics/statisticSlice';
import createSagaMiddleware from 'redux-saga';
import { SagaMiddleware } from 'redux-saga';
import { applyMiddleware } from 'redux';
import getDefaultMiddleware from 'redux-saga';

// interface RootState {
//     audio: any;
//     statistics: any;
// }

const saga: SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        audio: audioReducer,
        statistics: statisticReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         thunk: {
    //             extraArgument: saga,
    //         },
    //         serializableCheck: false,
    //     }),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

// export const audioSelector = (state: RootState) => state.audio;
export const statisticsSelector = (state: RootState) => state.statistics;
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
