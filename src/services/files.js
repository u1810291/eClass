import { service } from '.';

export default {
  getAll: () => service.get('/api/v1/files/list'),
  uploadFile: (data) => service.post('/api/v1/files/upload', data),
  downloadFile: ({ id }) => service.get(`/api/v1/files/download/${id}`),
  deleteFile: ({ id }) => service.delete(`/api/v1/files/download/${id}`)
};
