import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/profile';
import {
  setData,
  setError,
  setLoading
} from './actions';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const res = yield service.getProfile();
    console.log(res);
    yield put(setError(''));
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* studentProfileSaga() {
  yield takeLatest(types.STUDENT_PROFILE_FETCH_DATA, fetchData);
}
