import { service } from '.';

export default {
  getAll: () => service.get('/api/v1/files/list'),
  uploadFile: (data) => service.post('/api/v1/files/upload', data),
  downloadFile: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      service.get('/api/v1/files/download/10840068-4c89-4dc4-80fd-be13b590dcee')
        .then((data) => {
          console.log(data);
          resolve(data.data);
        }).catch((err) => reject(err));
    }, 2000);
  }),
  deleteFile: ({ id }) => service.delete(`/api/v1/files/download/${id}`)
};
