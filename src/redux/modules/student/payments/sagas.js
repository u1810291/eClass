import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/exercise';
import {
  setError,
  setLoading
} from './actions';

function* topUp({ payload, success }) {
  try {
    yield put(setLoading(true));
    const res = yield service.getQuizes(payload.query);
    yield put(setError(''));
    yield put(setLoading(false));
    yield success(res.data);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* studentQuizesSaga() {
  yield takeLatest(types.STUDENT_PAYMENTS_TOP_UP, topUp);
}
