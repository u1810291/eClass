import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/group/list?${query}`),
  createGroup: (data) => service.post('/api/v1/group', data),
  updateGroupIdInBody: (data) => service.patch('/api/v1/group/', data),
  updateGroupIdInParams: ({ id, data }) => service.put(`/api/v1/group/${id}`, data),
  deleteGroupSubIdInParams: ({ id }) => service.delete(`/api/v1/group/${id}`),
  restoreGroupSubIdInParams: ({ id }) => service.delete(`/api/v1/group/${id}/restore`),
  deleteGroupNameIdInParams: ({ id }) => service.delete(`/api/v1/group/${id}`),

  getGroupStudents: ({ id }) => service.get(`/api/v1/group/${id}/students`),
  addGroupStudents: ({ id, sId }) => service.post(`/api/v1/group/${id}/students${sId}`),
  deleteGroupStudents: ({ id, sId }) => service.delete(`/api/v1/group/${id}/students${sId}`)
};
