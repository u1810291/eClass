import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/user';
import { setData, setError } from './actions';

function* userInfo() {
  try {
    const res = yield service.whoAmI();
    console.log(res);
    yield put(setData(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* userInfoSaga() {
  yield takeLatest(types.FETCH_USER_INFO, userInfo);
}
