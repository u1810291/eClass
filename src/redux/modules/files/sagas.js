import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/files';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* getFiles() {
  try {
    const res = yield service.getAll();
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* uploadFile(payload) {
  try {
    const { data } = dataSelector(payload.data);
    const res = yield service.uploadFile(data);
    yield put(setError(''));
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* deleteFile(payload) {
  try {
    const { id } = payload;
    yield service.deleteFile(id);
    yield put(setError(''));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* getFileById({ payload }) {
  try {
    const { id } = payload;
    const res = yield service.getFileById(id);
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* filesSaga() {
  yield takeLatest(types.FILES_FETCH_DATA, getFiles);
  yield takeLatest(types.FILES_UPLOAD_DATA, uploadFile);
  yield takeLatest(types.FILES_DELETE_DATA, deleteFile);
  yield takeLatest(types.FILES_BY_ID_FETCH_DATA, getFileById);
}
