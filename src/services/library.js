import { service } from '.';

export default {
  getAll: ({ id }) => service.get(`/api/v1/library/${id}/list`),
  uploadFile: ({ id, data }) => service.post(`/api/v1/library/${id}`, { data }),
  deleteMaterial: ({ id }) => service.delete(`/api/v1/library/${id}`)
};
