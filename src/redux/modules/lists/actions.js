import types from '../../../constants/action-types';

export const setLoading = (payload, type) => ({ type: types[`DROPDOWN_${type}_SET_LOADING`], payload });
export const setData = (payload, type) => ({ type: types[`DROPDOWN_${type}_COUNTRIES_SET_DATA`], payload });
export const setTotal = (payload, type) => ({ type: types[`DROPDOWN_${type}_COUNTRIES_SET_TOTAL`], payload });
export const setError = (payload, type) => ({ type: types[`DROPDOWN_${type}_COUNTRIES_ERROR`], payload });

export const getCountries = (payload) => ({
  type: types.DROPDOWN_CITIES_FETCH_DATA,
  payload
});

export const getCities = (payload) => ({
  type: types.DROPDOWN_COUNTRIES_FETCH_DATA,
  payload
});

export const getReasons = (payload) => ({
  type: types.DROPDOWN_REASONS_FETCH_DATA,
  payload
});
