/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  access_token: sessionStorage.getItem('access_token'),
  refresh_token: sessionStorage.getItem('refresh_token')
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    return {
      ...state, access_token: '', refresh_token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({ ...state, error: payload }),
  [types.AUTH_SET_ACCESS_TOKEN]: (state, { payload }) => {
    sessionStorage.setItem('access_token', payload);
    return {
      ...state, access_token: payload
    };
  },
  [types.AUTH_SET_REFRESH_TOKEN]: (state, { payload }) => {
    sessionStorage.setItem('refresh_token', payload);
    return {
      ...state, refresh_token: payload
    };
  }
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
