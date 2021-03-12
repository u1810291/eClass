import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/files';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector, getFilesSelector } from './selectors';

function* getFiles() {
  try {
    const res = yield service.getAll();
    const { data } = getFilesSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

function* uploadFile({ payload, success }) {
  try {
    const { data } = dataSelector(payload.values);
    const res = yield service.uploadFile(data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

function* deleteFile(payload) {
  try {
    const { id } = payload;
    yield service.deleteFile(id);
    yield put(setError(''));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

function* getFileById({ payload }) {
  try {
    const { id } = payload;
    // console.log(payload);
    const res = yield service.getFileById(id)
      .then((response) => {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'employees.json';
          a.click();
        });
        // window.location.href = response.url;
      });
    // console.log(res);
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    // console.log(error);
    yield put(setError(error));
  }
}

export default function* filesSaga() {
  yield takeLatest(types.FILES_FETCH_DATA, getFiles);
  yield takeLatest(types.FILES_UPLOAD_DATA, uploadFile);
  yield takeLatest(types.FILES_DELETE_DATA, deleteFile);
  yield takeLatest(types.FILES_BY_ID_FETCH_DATA, getFileById);
}
