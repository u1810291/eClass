/* eslint-disable no-unused-vars */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/lists';
import {
  setError
} from './actions';

import { dataSelector, reasonSelector } from './selectors';

function* getCountries() {
  try {
    const res = yield service.countries();
    const { data } = dataSelector(res.data);
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

function* getCities() {
  try {
    const res = yield service.cities();
    const { data } = dataSelector(res.data);
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

function* getReasons() {
  try {
    const res = yield service.reasons();
    const { data } = reasonSelector(res.data);
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

export default function* listsSaga() {
  yield takeLatest(types.GET_COUNTRIES, getCountries);
  yield takeLatest(types.GET_CITIES, getCities);
  yield takeLatest(types.GET_REASONS, getReasons);
}
