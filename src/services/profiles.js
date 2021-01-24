import { service } from '.';

export default {
  whoAmI: () => service.get('/api/v1/profiles/whoami'),
  resetPassword: ({ userName }) => service.post(`/api/v1/profiles/password/reset/request?username=${userName}`),
  requestSMS: ({ phoneNumber }) => service.post(`/api/v1/profiles/password/reset/request-sms?phone=${phoneNumber}`),
  confirmSMS: ({ phoneNumber, code }) => service.post(`/api/v1/profiles/password/reset/confirm-sms?phone=${phoneNumber}&code=${code}`),
  resetNewPassword: ({ data }) => service.post('/api/v1/profiles/password/reset/new-password', { data })

};
