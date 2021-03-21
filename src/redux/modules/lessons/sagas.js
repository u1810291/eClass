import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import serviceT from '../../../services/teacher/lesson';
import serviceS from '../../../services/student/lesson';
import {
  setDataT,
  setErrorT,
  setDataS,
  setErrorS
} from './actions';

import { dataSelector } from './selectors';

function* teacherSign({ payload }) {
  try {
    console.log(payload);
    const res = yield serviceT.getStignature(payload);
    console.log(res);
    const { data } = dataSelector(res.data);
    yield put(setErrorT(''));
    yield put(setDataT(data));
  } catch (error) {
    yield put(setErrorT(error));
  }
}
function* studentSign({ payload }) {
  try {
    const res = yield serviceS.getSignature(payload);
    console.log(res);
    const { data } = dataSelector(res.data);
    yield put(setErrorS(''));
    yield put(setDataS(data));
  } catch (error) {
    yield put(setErrorS(error));
  }
}

export default function* studentQuizesSaga() {
  yield takeLatest(types.LESSON_TEACHER_FETCH_DATA, teacherSign);
  yield takeLatest(types.LESSON_STUDENT_FETCH_DATA, studentSign);
}
