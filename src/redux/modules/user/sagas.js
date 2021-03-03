import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/profiles';
import {
  setData, setError
} from './actions';

function* fetchData() {
  try {
    const res = yield service.whoAmI();
    yield put(setData(res.data));
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

export default function* userInfoSaga() {
  yield takeLatest(types.FETCH_USER_INFO, fetchData);
}
