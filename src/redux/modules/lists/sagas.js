import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/lists';
import {
  setError
} from './actions';

function* getCountries() {
  try {
    const res = yield service.countries();
    console.log(res);
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

function* getCities() {
  try {
    const res = yield service.cities();
    console.log(res);
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

function* getReasons() {
  try {
    const res = yield service.reasons();
    console.log(res);
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
