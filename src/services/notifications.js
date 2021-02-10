import { service } from '.';

export default {
  getNotifications: () => service.get('/api/v1/notifications'),
  getNotification: ({ id }) => service.get(`/api/v1/notifications/read/${id}`)
};
