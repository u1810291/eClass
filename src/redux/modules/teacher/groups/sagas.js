/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/groups';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import {
  startLessonSelector
} from './selectors';

function* getStudents({ payload, success }) {
  try {
    yield put(setLoading(true));
    const res = yield service.getGroupStudents(payload);
    const { total, data } = startLessonSelector(res.data);
    yield put(setData(data));
    yield put(setError(''));
    yield put(setTotal(total));
    yield put(setLoading(false));
    success(data);
  } catch (error) {
    console.log(error.response ? error.response.data.error_message : error);
    alert(error.response ? error.response.data.error_message : error);
  }
}

export default function* teacherLessonsSaga() {
  yield takeLatest(types.TABLE_TEACHER_FETCH_STUDENTS, getStudents);
}
