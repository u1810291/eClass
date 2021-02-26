import { service } from '.';

export default {
  getAll: () => service.get('/api/v1/files/list'),
  uploadFile: (data) => service.post('/api/v1/files/upload', data),
  downloadFile: (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`https://five-plus.co/api/v1/files/download/${id}`, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('access_token')}`
        }
      })
        .then((response) => response)
        .then((data) => {
          resolve(data);
        }).catch((err) => reject(err));
    }, 2000);
  }),
  deleteFile: ({ id }) => service.delete(`/api/v1/files/download/${id}`)
};
