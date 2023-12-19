import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import statisticReducer from './statistics/statisticSlice';
import createSagaMiddleware from 'redux-saga';
import statisticsSaga from './statistics/statisticSaga';

const saga: any = createSagaMiddleware();

const store = configureStore({
    reducer: {
        statistics: statisticReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(statisticsSaga);

export const statisticsSelector = (state: RootState) => state.statistics;
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
