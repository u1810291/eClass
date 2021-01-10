import types from "../../../constants/action-types";

const defaultState = {
  show: false,
};

const map = {
  [types.APPLICATION_SHOW_ALERT]: (state, {payload}) => ({
    show: true,
    ...payload,
  }),
  [types.APPLICATION_HIDE_ALERT]: () => ({
    show: false,
  }),
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
