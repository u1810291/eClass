/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/lists';
import {
  setData,
  setError
} from './actions';

import { dataSelector, reasonSelector } from './selectors';

function* getCountries() {
  try {
    const res = yield service.countries();
    const { data } = dataSelector(res.data);
    console.log(data);
    yield put(setError('', 'COUNTRIES'));
    yield put(setData(data, 'COUNTRIES'));
  } catch (error) {
    console.log(error);
    yield put(setError(error.message, 'COUNTRIES'));
  }
}

// function* getCities() {
//   try {
//     const res = yield service.cities();
//     const { data } = dataSelector(res.data);
//     yield put(setError('CITIES', ''));
//     yield put(setData('CITIES', data));
//   } catch (error) {
//     console.log(error);
//     yield put(setError('CITIES', error.message));
//   }
// }

// function* getReasons() {
//   try {
//     const res = yield service.reasons();
//     const { data } = reasonSelector(res.data);
//     yield put(setError('REASONS', ''));
//     yield put(setData('REASONS', data));
//   } catch (error) {
//     console.log(error);
//     yield put(setError('REASONS', error.message));
//   }
// }

export default function* listsSaga() {
  yield takeLatest(types.COUNTRIES_FETCH_DATA, getCountries);
  // yield takeLatest(types.CITIES_FETCH_DATA, getCities);
  // yield takeLatest(types.REASONS_FETCH_DATA, getReasons);
}
