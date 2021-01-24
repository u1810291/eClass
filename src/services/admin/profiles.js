import { service } from '..';

export default {
  // TODO Students GET & PUT & DELETE
  getAllStudents: () => service.get('/api/v1/profiles/student/list'),
  getAllSingleStudent: ({ param }) => service.get(`/api/v1/profiles/student?student=${param}`),
  updateStudent: ({ id }) => service.put(`/api/v1/profiles/student/${id}`),
  searchStudent: ({ uud }) => service.get(`/api/v1/profiles/student/search?username=${uud}`),
  deleteStudentRequest: ({ id }) => service.delete(`/api/v1/profiles/student/${id}/request`),
  deleteStudent: ({ id, token }) => service.delete(`/api/v1/profiles/student/${id}?token=${token}`),
  restoreStudent: ({ userName }) => service.delete(`/api/v1/profiles/student/restore?username=${userName}`),
  topupStudent: ({ data }) => service.delete('/api/v1/finance/topup', { data }),

  // TODO Teacher GET & PUT & DELETE
  getTeachers: () => service.get('/api/v1/profiles/teacher/list'),
  getAllSingleTeacher: ({ param }) => service.get(`/api/v1/profiles/teacher?teacher=${param}`),
  updateTeacher: ({ id }) => service.put(`/api/v1/profiles/teacher/${id}`),
  searchTeacher: ({ eaa }) => service.get(`/api/v1/profiles/teacher/search?username=${eaa}`),
  deleteTeacherRequest: ({ id }) => service.delete(`/api/v1/profiles/teacher/${id}/request`),
  deleteTeacher: ({ id, token }) => service.delete(`/api/v1/profiles/teacher/${id}?token=${token}`),
  restoreTeacher: ({ userName }) => service.delete(`/api/v1/profiles/teacher/restore?username=${userName}`),
  downloadCertificate: ({ id }) => service.get(`/api/v1/teacher/certificate/${id}`),
  deleteCertificate: ({ id }) => service.delete(`/api/v1/teacher/certificate/${id}`),

  // TODO Admin GET & PUT & DELETE
  getAdmin: () => service.get('/api/v1/profiles/admin/list'),
  getAllSingleAdmin: ({ param }) => service.get(`/api/v1/profiles/admin?admin=${param}`),
  updateAdmin: ({ id }) => service.put(`/api/v1/profiles/admin/${id}`),
  searchAdmin: ({ mmi }) => service.get(`/api/v1/profiles/admin/search?username=${mmi}`),
  deleteAdminRequest: ({ id }) => service.delete(`/api/v1/profiles/admin/${id}/request`),
  deleteAdmin: ({ id, token }) => service.delete(`/api/v1/profiles/admin/${id}?token=${token}`),
  restoreAdmin: ({ userName }) => service.delete(`/api/v1/profiles/admin/restore?username=${userName}`)
};
