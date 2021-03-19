import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  loading: true,
  error: ''
};

const map = {
  [types.FILES_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.FILES_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.FILES_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
