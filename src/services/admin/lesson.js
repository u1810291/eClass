/* eslint-disable camelcase */
import { service } from '..';
import { authSelector } from '../selectors';

export default {
  getAdminLessons: () => authSelector(service.get('/api/v1/lessons/list'))
};
