/* eslint-disable camelcase */
import axios, { execute, service } from '.';

export default {
  // TODO Login
  getToken: ({ username, password }) => service.post('/api/v1/login', { username, password }),
  refreshToken: ({ refresh_token }) => service.post('/api/v1/refresh', { refresh_token }),
  //  TODO Register
  registerStudent: (data) => service.post('/api/v1/register/student', data),
  registerTeacher: (data) => service.post('/api/v1/register/teacher', { data }),
  registerAdmin: (data) => service.post('/api/v1/register/admin', { data }),
  // TODO Confirm
  confirmSMS: ({ code, user }) => service.post(`/api/v1/register/sms/confirm?code=${code}&user=${user}`),
  repeatSMS: ({ user, phone }) => service.post(`/api/v1/register/sms/repeat?user=${user}&phone=${phone}`),
  repeatEmail: ({ user, email }) => service.post(`/api/v1/register/email/repeat?user=${user}&email=${email}`),
  // TODO Deprecated
  sendRestLink: (data) => execute(axios.post('/auth/reset', { data })),
  authVerify: (params) => execute(axios.post('/front-end/auth/verify', { params })),
  changePassword: (data) => execute(axios.post('/auth/changePassword'), { data })
};
