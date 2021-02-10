import { service } from '.';

export default {
  getNotifications: () => service.get('/api/v1/notifications'),
  readNotification: ({ id }) => service.post(`/api/v1/notifications/read/${id}`)
};
