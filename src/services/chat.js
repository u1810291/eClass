/* eslint-disable camelcase */
import { service } from '.';

export default {
  getChatRooms: () => service.get('api/v1/chat/rooms/list'),
  createRoom: ({ data }) => service.post('/api/v1/chat/rooms', { data }),
  updateRoom: ({ id, data }) => service.put(`/api/v1/chat/rooms/${id}`, { data }),
  deleteRoom: ({ id }) => service.put(`/api/v1/chat/rooms/${id}`),
  getRoomUsers: ({ id }) => service.get(`/api/v1/chat/rooms/${id}/users`),
  addUserToRoom: ({ id, uuid }) => service.post(`/api/v1/chat/rooms/${id}/users/${uuid}`),
  deleteUserFromRoom: ({ id, uuid }) => service.delete(`/api/v1/chat/rooms/${id}/users/${uuid}`),
  addGroupToRoom: ({ id, uuid }) => service.post(`/api/v1/chat/rooms/${id}/groups/${uuid}`),
  deleteGroupFromRoom: ({ id, uuid }) => service.delete(`/api/v1/chat/rooms/${id}/groups/${uuid}`),
  editMessage: ({ id }) => service.put(`/api/v1/chat/message/${id}`),
  deleteMessage: ({ id }) => service.delete(`/api/v1/chat/message/${id}`),
  getDialogs: ({ from_date, to_date }) => service.get('api/v1/chat/message/dialogs', { from_date, to_date }),
  // GET /chat/message/user/:user_id - Get messages exchange with a user
  // Get messages from/to specific user
  sendMessageToUser: ({ message, to_user }) => service.post('/api/v1/chat/message', { message, to_user }),
  sendMessageToRoom: ({ message, to_room }) => service.post('/api/v1/chat/message', { message, to_room }),
  getMessageOfUser: ({ id }) => service.get(`/api/v1/chat/message/user/${id}`),
  getMessageOfRoom: ({ id }) => service.get(`/api/v1/chat/message/room/${id}`)
};
