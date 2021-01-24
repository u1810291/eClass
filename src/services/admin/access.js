import { service } from '..';

export default {
  getAccess: ({ lang }) => service.get(`/api/v1/access/list?full=true&lang=${lang}`),
  addAccess: ({ accessId, userId }) => service.post(`/api/v1/access/${accessId}/user/${userId}`),
  deleteAccess: ({ accessId, userId }) => service.delete(`/api/v1/access/${accessId}/user/${userId}`)
};
