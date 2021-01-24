import { service } from '..';

export default {
  getSelf: () => service.get('/api/v1/admin/profile')
};
