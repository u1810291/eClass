/* eslint-disable camelcase */
import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/group/list?${query}`),
  createGroup: (data) => service.post('/api/v1/group', data),
  updateGroupIdInBody: (data) => service.put('/api/v1/group/', data),
  updateGroupIdInParams: (data, id) => service.put(`/api/v1/group/${id}`, data),
  deleteGroupIdInParams: (id) => service.delete(`/api/v1/group/${id}`),
  restoreGroupIdInParams: (id) => service.delete(`/api/v1/group/${id}/restore`),
  deleteGroupNameIdInParams: (id) => service.delete(`/api/v1/group/${id}`),

  getGroupStudents: (id) => service.get(`/api/v1/group/${id}/students`),
  addGroupStudents: ({ id, student_id }) => service.post(`/api/v1/group/${id}/students${student_id}`),
  deleteGroupStudents: (id, student_id) => service.delete(`/api/v1/group/${id}/students${student_id}`)
};
