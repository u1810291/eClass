import types from '../../../constants/permission-types';

export const userInfo = (user) => ({
  type: types.APPLICATION_USER_INFO,
  user
});
