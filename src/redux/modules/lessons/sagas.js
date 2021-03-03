import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/teacher/lesson';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    const { query } = payload;
    const res = yield service.getAll(query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_LESSONS_FETCH_DATA, fetchData);
}
