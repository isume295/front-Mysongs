import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getArtistSuccess } from './artistSlice';
const url = `${baseURL}/albums`;

function* fetchAlbums(): Generator<any, void, any> {
    try {
        const artist = yield call(() => axios.get(url));
        const formattedArtist = yield artist.data;
        yield put(getArtistSuccess(formattedArtist));
    } catch (error) {
        console.log(error);
    }
}
function* artistSaga() {
    yield takeEvery('artists/getArtistPending', fetchAlbums);
}

export default artistSaga;
