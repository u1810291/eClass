import { service } from '.';

export default {
  getSubject: () => service.get('/api/v1/subject/list')
};
