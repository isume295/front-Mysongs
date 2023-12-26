import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import baseURL from '../baseURL';
import { getAlbumFailure, getAlbumSuccess } from './albumSlice';
import { toast } from 'react-toastify';
const url = `${baseURL}/album`;

function* fetchAlbums(): Generator<any, void, any> {
    try {
        const album = yield call(() => axios.get(url));
        const formattedAlbum = yield album.data;
        yield put(getAlbumSuccess(formattedAlbum));
    } catch (error: any) {
        toast.error('Something went wrong');
        yield put(getAlbumFailure(error.message));
        console.log(error);
    }
}
function* albumSaga() {
    yield takeEvery('albums/getAlbumPending', fetchAlbums);
}

export default albumSaga;
