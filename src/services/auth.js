/* eslint-disable camelcase */
import axios, { execute, service } from '.';
import { authSelector } from './selectors';

export default {
  getToken: ({ username, password }) => authSelector(service.post('/api/v1/login', { username, password })),
  sendRestLink: (data) => execute(axios.post('/auth/reset', { data })),
  authVerify: (params) => execute(axios.post('/front-end/auth/verify', { params })),
  changePassword: (data) => execute(axios.post('/auth/changePassword'), { data }),
  refreshToken: ({ refresh_token }) => authSelector(service.post('/refresh', { refresh_token }))
};
