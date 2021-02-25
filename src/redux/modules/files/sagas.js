import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/files';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* getFiles() {
  try {
    const res = yield service.getAll();
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* getFileById({ payload }) {
  try {
    const { id } = payload;
    const res = yield service.getFiles(id);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* filesSaga() {
  yield takeLatest(types.TABLE_LESSONS_FETCH_DATA, getFiles);
  yield takeLatest(types.TABLE_LESSONS_FETCH_DATA, getFileById);
}
