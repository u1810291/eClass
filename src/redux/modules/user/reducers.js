import types from "../../../constants/permission-types";

const defaultState = {
  userInfo: {},
};

const userInfo = {
  [types.APPLICATION_USER_INFO]: (state, { user }) => ({
    ...state,
    userInfo: user,
  }),
};

const map = {
  ...userInfo,
};

export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
