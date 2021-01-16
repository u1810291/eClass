import types from '../../../constants/action-types';

export const show = (payload) => ({
  type: types.APPLICATION_SHOW_ALERT,
  payload
});
export const hide = () => ({ type: types.APPLICATION_HIDE_ALERT });
