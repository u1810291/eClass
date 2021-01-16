import { service } from '.';
import { authSelector } from './selectors';

export default {
  whoAmI: () => authSelector(service.get('/api/v1/profiles/whoami')),
  getAll: () => authSelector(service.get('/api/v1/profiles/student/list'))
};
