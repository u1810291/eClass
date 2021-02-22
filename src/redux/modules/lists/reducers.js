import types from '../../../constants/action-types';

const defaultState = {
  error: ''
};

const map = {
  [types.SET_LIST_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
