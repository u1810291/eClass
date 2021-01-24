import { service } from '..';

export default {
  getProfile: () => service.get('api/v1/teacher/profile'),
  updateProfile: ({ data }) => service.put('/api/v1/teacher/profile', { data }),
  uploadPhoto: ({ data }) => service.post('/api/v1/teacher/photo', { data }),
  downloadPhoto: ({ data }) => service.get('/api/v1/teacher/photo', { data }),
  deletePhoto: ({ data }) => service.delete('/api/v1/teacher/photo', { data }),
  listCertificate: () => service.get('/api/v1/teacher/certificate/list'),
  addCertificate: ({ data }) => service.post('/api/v1/teacher/certificate/list', { data }),
  downloadCertificate: ({ id }) => service.get(`/api/v1/teacher/certificate/${id}`),
  deleteCertificate: ({ id }) => service.delete(`/api/v1/teacher/certificate/${id}`)

};
