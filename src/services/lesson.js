/* eslint-disable camelcase */
import { service } from '.';

export default {
  getAll: () => service.get('/api/v1/student/lessons/list')
};
