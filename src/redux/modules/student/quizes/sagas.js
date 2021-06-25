import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/exercise';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector, submitHomeworkSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    const res = yield service.getQuizes(payload.query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* submitQuiz({ payload, success }) {
  try {
    const { data } = submitHomeworkSelector(payload.values);
    const res = yield service.submitExercise(payload.id, data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

function* updateQuiz({ payload, success }) {
  try {
    const { data } = submitHomeworkSelector(payload.values);
    const res = yield service.submitExercise(payload.id, data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

export default function* studentQuizesSaga() {
  yield takeLatest(types.TABLE_STUDENT_QUIZES_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_STUDENT_QUIZ_ADD, submitQuiz);
  yield takeLatest(types.TABLE_STUDENT_QUIZ_UPDATE, updateQuiz);
}
