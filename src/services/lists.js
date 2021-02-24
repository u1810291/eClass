import { service } from '.';

export default {
  countries: () => service.get('/api/v1/lists/countries'),
  cities: () => service.get('/api/v1/lists/cities'),
  reasons: () => service.get('/api/v1/lists/reasons'),
  createReason: (data) => service.post('/api/v1/lists/reasons', data),
  updateReason: (data) => service.put('/api/v1/lists/reasons', data),
  deleteReason: ({ id }) => service.delete(`/api/v1/lists/reasons/${id}`),
  deleteReasonName: ({ id, name }) => service.delete(`/api/v1/lists/reasons/${id}/${name}`)
};
