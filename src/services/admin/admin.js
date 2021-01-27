import { service } from '..';

export default {
  getAdmin: () => service.get('/api/v1/profiles/admin/list'),
  getAllSingleAdmin: ({ param }) => service.get(`/api/v1/profiles/admin?admin=${param}`),
  updateAdmin: ({ id }) => service.put(`/api/v1/profiles/admin/${id}`),
  searchAdmin: ({ mmi }) => service.get(`/api/v1/profiles/admin/search?username=${mmi}`),
  deleteAdminRequest: ({ id }) => service.delete(`/api/v1/profiles/admin/${id}/request`),
  deleteAdmin: ({ id, token }) => service.delete(`/api/v1/profiles/admin/${id}?token=${token}`),
  restoreAdmin: ({ userName }) => service.delete(`/api/v1/profiles/admin/restore?username=${userName}`)
};
