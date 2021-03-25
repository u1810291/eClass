/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/teacher/lesson';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import {
  dataSelector,
  startLessonSelector,
  cancelLessonSelector
} from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const { query } = payload;

    const res = yield service.getAll(query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}
function* startLesson({ payload, success }) {
  try {
    const res = yield service.startLesson(payload);
    const { data } = startLessonSelector(res.data);
    console.log(data);
    success(data);
  } catch (error) {
    console.log(error);
  }
}

function* cancelLesson({ payload, success }) {
  try {
    console.log(payload);
    const res = yield service.cancelLesson(payload.id, payload.reason);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error);
  }
}

export default function* teacherLessonsSaga() {
  yield takeLatest(types.TABLE_TEACHER_LESSONS_FETCH_DATA, fetchData);
  yield takeLatest(types.TEACHER_START_LESSONS, startLesson);
  yield takeLatest(types.TEACHER_CANCEL_LESSONS, cancelLesson);
}
