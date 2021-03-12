/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/lists';
import users from '../../../services/admin/users';
import {
  setData,
  setError,
  setCities,
  setCountries,
  setReasons
} from './actions';

import { dataSelector, reasonSelector } from './selectors';

function* getCountries() {
  try {
    const res = yield service.countries();
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setCountries(data));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* getCities() {
  try {
    const res = yield service.cities();
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setCities(data));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* getReasons() {
  try {
    const res = yield service.reasons();
    const { data } = reasonSelector(res.data);
    yield put(setError(''));
    yield put(setReasons(data));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* getUser({ payload }) {
  try {
    const res = yield users.getUsers(payload);
    console.log(res);
    yield setData(res.data);
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* listsSaga() {
  yield takeLatest(types.COUNTRIES_FETCH_DATA, getCountries);
  yield takeLatest(types.CITIES_FETCH_DATA, getCities);
  yield takeLatest(types.REASONS_FETCH_DATA, getReasons);
  yield takeLatest(types.USERS_FETCH_DATA, getUser);
}
