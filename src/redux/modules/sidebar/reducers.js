import types from "../../../constants/action-types";

const defaultState = {
  collapsed: false,
};

const map = {
  [types.SIDEBAR_COLLAPSE]: (state) => ({ ...state, collapsed: true }),
  [types.SIDEBAR_EXPAND]: (state) => ({ ...state, collapsed: false }),
  [types.SIDEBAR_COLLAPSED_BYVALUE]: (state, { value }) => ({
    ...state,
    collapsed: value,
  }),
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
