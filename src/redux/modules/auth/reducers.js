import types from "../../../constants/action-types";

const defaultState = {
  token: localStorage.getItem("token"),
};

const map = {
  [types.AUTH_LOGIN]: (state, { token }) => {
    localStorage.setItem("token", token);
    return { ...state, token };
  },
  [types.AUTH_LOGOUT]: (state) => {
    localStorage.removeItem("token");
    return { ...state, token: "" };
  },
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
