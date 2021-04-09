/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/lesson';
import {
  setData,
  setError,
  setTotal,
  setLoading,
  setStartError
} from './actions';

import { dataSelector, joinLessonSelector, cancelLessonSelector } from './selectors';

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
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* joinLesson({ payload, success }) {
  try {
    const res = yield service.visitLesson(payload);
    const { data } = joinLessonSelector(res.data);
    setStartError('');
    success(data);
  } catch (error) {
    console.log(error);
    console.log(error.response.data.error_message);
  }
}

function* cancelLesson({ payload, success }) {
  try {
    const res = yield service.declineLesson(payload.id, payload.reason);
    console.log(res);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error);
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_STUDENT_LESSONS_FETCH_DATA, fetchData);
  yield takeLatest(types.STUDENT_JOIN_LESSONS, joinLesson);
  yield takeLatest(types.STUDENT_CANCEL_LESSONS, cancelLesson);
}
