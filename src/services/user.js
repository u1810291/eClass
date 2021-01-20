import { service } from '.';

export default {
  whoAmI: () => service.get('/api/v1/profiles/whoami'),
  getAll: () => service.get('/api/v1/profiles/student/list')
};
