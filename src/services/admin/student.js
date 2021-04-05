import { service } from '..';

export default {
  getAllStudents: () => service.get('/api/v1/profiles/student/list'),
  getAllSingleStudent: ({ param }) => service.get(`/api/v1/profiles/student?student=${param}`),
  updateStudent: ({ id }) => service.put(`/api/v1/profiles/student/${id}`),
  searchStudent: ({ uud }) => service.get(`/api/v1/profiles/student/search?username=${uud}`),
  deleteStudentRequest: ({ id }) => service.delete(`/api/v1/profiles/student/${id}/request`),
  deleteStudent: ({ id, token }) => service.delete(`/api/v1/profiles/student/${id}?token=${token}`),
  restoreStudent: ({ userName }) => service.delete(`/api/v1/profiles/student/restore?username=${userName}`)
};
