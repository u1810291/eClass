/* eslint-disable no-alert */
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
  try {
    yield put(setLoading(true));
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
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* cancelLesson({ payload, success }) {
  try {
    const res = yield service.declineLesson(payload.id, payload.values);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* rescheduleLesson({ payload, success }) {
  try {
    const res = yield service.rescheduleRequest(payload.id, payload.data);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* confirmReschedule({ payload, success }) {
  try {
    const res = yield service.closeRequest(payload);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* closeReschedule({ payload, success }) {
  try {
    const res = yield service.confirmRescheduleRequest(payload);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* addRating({ payload, success }) {
  try {
    const res = yield service.addRating(payload);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* revokeRating({ payload, success }) {
  try {
    const res = yield service.revokeRating(payload.teacher_id, payload.group_id);
    const { data } = cancelLessonSelector(res.data);
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_STUDENT_LESSONS_FETCH_DATA, fetchData);
  yield takeLatest(types.STUDENT_JOIN_LESSONS, joinLesson);
  yield takeLatest(types.STUDENT_CANCEL_LESSONS, cancelLesson);
  yield takeLatest(types.STUDENT_RESCHEDULE_LESSONS, rescheduleLesson);
  yield takeLatest(types.STUDENT_RESCHEDULE_CONFIRM_LESSONS, confirmReschedule);
  yield takeLatest(types.STUDENT_RESCHEDULE_CLOSE_LESSONS, closeReschedule);
  yield takeLatest(types.STUDENT_ADD_RATING_LESSONS, addRating);
  yield takeLatest(types.STUDENT_REVOKE_RATING_LESSONS, revokeRating);
}
