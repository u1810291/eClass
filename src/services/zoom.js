import { service } from '.';

export default {
  getAccountList: () => service.get('/api/v1/zoom/account/list'),
  getSingleAccount: (email) => service.get(`/api/v1/zoom/account?account=${email}`),
  registerAccount: (data) => service.post('/api/v1/zoom/account/register', data),
  unRegisterAccount: (email) => service.delete(`/api/v1/zoom/account/unregister/${email}`),
  createMeeting: (data) => service.post('/api/v1/zoom/meeting/create', data),
  stopMeeting: (id) => service.delete(`/api/v1/zoom/meeting/stop?meeting_id=${id}`),
  zoomSignature: ({ id, role }) => service.get(`/api/v1/zoom/signature?meeting_id=${id}&role=${role}`)
};
