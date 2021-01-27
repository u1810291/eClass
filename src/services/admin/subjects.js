import { service } from '..';

export default {
  createSubject: ({ data }) => service.put('/api/v1/subject', data),
  updateSubjectIdInBody: ({ data }) => service.put('/api/v1/subject/', data),
  updateSubjectIdInParams: ({ id, data }) => service.put(`/api/v1/subject/${id}`, data),
  deleteSubjectSubIdInParams: ({ id }) => service.delete(`/api/v1/subject/${id}`),
  deleteSubjectNameIdInParams: ({ id }) => service.delete(`/api/v1/subject/${id}`)
};
