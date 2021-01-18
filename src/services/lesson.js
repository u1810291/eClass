/* eslint-disable camelcase */
import { service } from '.';
import { authSelector } from './selectors';

export default {
  getStudentLessons: () => authSelector(service.get('/api/v1/student/lessons/list')),
  getTeacherLessons: () => authSelector(service.get('/api/v1/teacher/lessons/list')),
  getAdminLessons: () => authSelector(service.get('/api/v1/lessons/list'))
};
