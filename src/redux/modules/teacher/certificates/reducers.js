import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  error: ''
};

const map = {
  [types.TEACHER_CERTIFICATE_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TEACHER_CERTIFICATE_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TEACHER_CERTIFICATE_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
