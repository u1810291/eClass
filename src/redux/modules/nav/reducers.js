import types from '../../../constants/action-types';

const defaultState = {
  title: ''
};

const map = {
  [types.NAVBER_SET_TITLE]: (state, { title }) => ({ ...state, title })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
