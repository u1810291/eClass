/* eslint-disable camelcase */
import { service } from '..';
import { authSelector } from '../selectors';

export default {
  getTeacherLessons: () => authSelector(service.get('/api/v1/teacher/lessons/list'))
};
