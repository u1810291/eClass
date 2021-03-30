import { service } from '..';

export default {
  getUsers: (user, params) => service.get(`/api/v1/profiles/${user}/list?${params}`),
  getAllSingleUser: (user, params) => service.get(`/api/v1/profiles/${user}?${params}`),
  updateUser: ({ user, id }) => service.put(`/api/v1/profiles/${user}/${id}`),
  searchUser: ({ user, eaa }) => service.get(`/api/v1/profiles/${user}/search?username=${eaa}`),
  deleteUserRequest: ({ user, id }) => service.delete(`/api/v1/profiles/${user}/${id}/request`),
  deleteUser: ({ user, id, token }) => service.delete(`/api/v1/profiles/${user}/${id}?token=${token}`),
  restoreUser: ({ user, userName }) => service.delete(`/api/v1/profiles/${user}/restore?username=${userName}`),
  topupStudent: (data) => service.post('/api/v1/finance/topup', data)
};
