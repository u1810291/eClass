import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/profiles';
import {
  setData, setError
} from './actions';

function* fetchData() {
  try {
    console.log('asd');
    const res = yield service.whoAmI();
    console.log(res);
    yield put(setData(res.data));
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

export default function* userInfoSaga() {
  yield takeLatest(types.FETCH_USER_INFO, fetchData);
}
