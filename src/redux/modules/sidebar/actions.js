import types from "../../../constants/action-types";

export const collapse = () => ({type: types.SIDEBAR_COLLAPSE});
export const expand = () => ({type: types.SIDEBAR_EXPAND});
export const setValue = (value) => ({
  type: types.SIDEBAR_COLLAPSED_BYVALUE,
  value,
});
