import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getStatisticsSuccess } from './statisticSlice';
const url = `${baseURL}/statistics`;

function* fetchStatistics(): Generator<any, void, any> {
    const statistics = yield call(() => axios.get(url));
    const formattedStatistics = yield statistics.data;
    yield put(getStatisticsSuccess(formattedStatistics));
}
function* statisticsSaga() {
    yield takeEvery('statistics/getStatisticsPending', fetchStatistics);
}

export default statisticsSaga;
