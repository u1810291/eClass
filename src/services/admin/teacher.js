import { service } from '..';

export default {
  getTeachers: () => service.get('/api/v1/profiles/teacher/list'),
  getAllSingleTeacher: ({ param }) => service.get(`/api/v1/profiles/teacher?teacher=${param}`),
  updateTeacher: ({ id }) => service.put(`/api/v1/profiles/teacher/${id}`),
  searchTeacher: ({ eaa }) => service.get(`/api/v1/profiles/teacher/search?username=${eaa}`),
  deleteTeacherRequest: ({ id }) => service.delete(`/api/v1/profiles/teacher/${id}/request`),
  deleteTeacher: ({ id, token }) => service.delete(`/api/v1/profiles/teacher/${id}?token=${token}`),
  restoreTeacher: ({ userName }) => service.delete(`/api/v1/profiles/teacher/restore?username=${userName}`),
  downloadCertificate: ({ id }) => service.get(`/api/v1/teacher/certificate/${id}`),
  deleteCertificate: ({ id }) => service.delete(`/api/v1/teacher/certificate/${id}`)
};
