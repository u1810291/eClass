import types from '../../../constants/action-types';

export const setError = (payload) => ({
  type: types.SET_ERROR,
  payload
});
export const setCountries = (payload) => ({
  type: types.COUNTRIES_SET_DATA,
  payload
});

export const setCities = (payload) => ({
  type: types.CITIES_SET_DATA,
  payload
});

export const setReasons = (payload) => ({
  type: types.REASONS_SET_DATA,
  payload
});
export const getCountries = (payload) => ({
  type: types.COUNTRIES_FETCH_DATA,
  payload
});

export const getCities = (payload) => ({
  type: types.CITIES_FETCH_DATA,
  payload
});

export const getReasons = (payload) => ({
  type: types.REASONS_FETCH_DATA,
  payload
});
