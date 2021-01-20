import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/lesson';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  try {
    const res = yield service.getAdminLessons();
    const { data } = dataSelector(res);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_STUDENT_LESSONS_FETCH_DATA, fetchData);
}
