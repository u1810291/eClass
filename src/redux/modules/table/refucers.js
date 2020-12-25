import types from "../../../constants/action-types";
import * as initial from "./common";

const defaultState = {
  usersHeader:
    JSON.parse(localStorage.getItem("usersHeader")) || initial.usersHeader,
};

const map = {};

initial.genericTypes.forEach(({ key, headerName }) => {
  map[types[`TABLE_${key}_HEADER_SET`]] = (state, { headers }) => ({
    ...state,
    [headerName]: headers,
  });
  map[types[`TABLE_${key}_HEADER_UPDATE`]] = (state, { headerId }) => ({
    ...state,
    [headerName]: state[headerName].map((header) =>
      header.id === headerId
        ? {
            ...header,
            show: !header.show,
          }
        : header
    ),
  });
  map[types[`TABLE_${key}_HEADER_SAVE`]] = (state) => {
    localStorage.setItem(headerName, JSON.stringify(state[headerName]));
    return state;
  };
  map[types[`TABLE_${key}_HEADER_RESET`]] = (state) => {
    localStorage.removeItem(headerName);
    return { ...state, [headerName]: initial[headerName] };
  };
});

// eslint-disable-next-line max-len
export default (state = defaultState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
