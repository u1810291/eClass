import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/lesson';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  yield put(setLoading(true));
  try {
    const res = yield service.getAll(payload.query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_STUDENT_LESSONS_FETCH_DATA, fetchData);
}
