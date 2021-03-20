import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  error: ''
};

const map = {
  [types.TABLE_LESSON_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_LESSON_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
