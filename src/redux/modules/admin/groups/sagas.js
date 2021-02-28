import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/groups';
import lesson from '../../../../services/admin/lesson';
import {
  setData,
  setError,
  setLoading,
  setTotal
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

function* createLesson({ payload }) {
  yield put(setLoading(true));
  try {
    console.log(payload);
    const data = dataSelector(payload);
    const res = yield lesson.createLesson(data);
    console.log(res);
    yield put(setError(''));
    yield put(setData(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_ADMIN_GROUPS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_LESSON, createLesson);
}
