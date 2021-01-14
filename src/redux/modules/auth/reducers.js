import types from "../../../constants/action-types";

const defaultState = {
  access_token: sessionStorage.getItem("access_token"),
  refresh_token: sessionStorage.getItem("refresh_token"),
};

const map = {
  [types.AUTH_LOGIN]: (state, {access_token, refresh_token}) => {
    sessionStorage.setItem("access_token", access_token);
    sessionStorage.setItem("refresh_token", refresh_token);
    return {...state, access_token, refresh_token};
  },
  [types.AUTH_LOGOUT]: (state) => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    return {...state, access_token: "", refresh_token: ""};
  },
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
