import { service } from '..';

export default {
  getProfile: () => service.get('api/v1/student/profile'),
  updateProfile: ({ data }) => service.put('/api/v1/student/profile', { data }),
  uploadPhoto: ({ data }) => service.post('/api/v1/student/photo', { data }),
  downloadPhoto: ({ data }) => service.get('/api/v1/student/photo', { data }),
  deletePhoto: ({ data }) => service.delete('/api/v1/student/photo', { data })
};
