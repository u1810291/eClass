import { service } from '.';

export default {
  getAll: () => service.get('/api/v1/files/list'),
  uploadFile: (data) => service.post('/api/v1/files/upload', data),
  downloadFile: (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      service.fetch(`/api/v1/files/download/${id}`)
        .then((response) => response.text())
        .then((data) => {
          resolve(data);
        }).catch((err) => reject(err));
    }, 2000);
  }),
  deleteFile: ({ id }) => service.delete(`/api/v1/files/download/${id}`)
};
