/* eslint-disable camelcase */
import { service } from '..';

export default {
  getLessons: () => service.get('/api/v1/lessons/list')
};
