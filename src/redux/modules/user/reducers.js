import types from '../../../constants/action-types';

const defaultState = {
  userInfo: []
};

const map = {
  [types.SET_USER_INFO]: (state, { payload }) => ({
    ...state,
    userInfo: payload
  }),

  [types.ERROR_USER_INFO]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

export default (state, action) => (
  map[action.type]
  && map[action.type](state, action)) || state || defaultState;
