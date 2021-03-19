import types from '../../../constants/action-types';

const defaultState = {
  users: [],
  countries: [],
  cities: [],
  reasons: [],
  error: ''
};

const map = {
  [types.DROPDOWN_USERS_SET_DATA]: (state, { payload }) => ({
    ...state,
    users: payload
  }),
  [types.COUNTRIES_SET_DATA]: (state, { payload }) => ({
    ...state,
    countries: payload
  }),
  [types.REASONS_SET_DATA]: (state, { payload }) => ({
    ...state,
    reasons: payload
  }),
  [types.CITIES_SET_DATA]: (state, { payload }) => ({
    ...state,
    cities: payload
  }),
  [types.SET_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};
// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
