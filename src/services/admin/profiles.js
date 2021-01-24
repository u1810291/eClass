import { service } from '..';

export default {
  getProfile: () => service.get('/api/v1/admin/profile'),
  updateProfile: ({ data }) => service.put('/api/v1/admin/profile', { data }),
  uploadPhoto: ({ data }) => service.post('/api/v1/admin/photo', { data }),
  downloadPhoto: () => service.get('/api/v1/admin/photo'),
  deletePhoto: () => service.delete('/api/v1/admin/photo')

};
