import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/profile';
import {
  setData,
  setError,
  setLoading
} from './actions';

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getProfile();
    yield put(setError(''));
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* studentProfileSaga() {
  yield takeLatest(types.STUDENT_PROFILE_FETCH_DATA, fetchData);
}
