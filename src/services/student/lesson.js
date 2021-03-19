/* eslint-disable camelcase */
import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/student/lessons/list?${query}`),
  visitLesson: ({ id }) => service.post(`/api/v1/student/lessons/${id}/visit`),
  declineLesson: ({ id, data }) => service.post(`/api/v1/student/lessons/${id}/decline`, { data }),
  declineUndoLesson: ({ id }) => service.post(`/api/v1/student/lessons/${id}/decline/undo`),
  rescheduleRequest: ({ id, data }) => service.post(`/api/v1/student/lessons/${id}/shift/request`, { data }),
  confirmRescheduleRequest: ({ id }) => service.post(`/api/v1/student/lessons/shift/confirm/${id}`),
  closeRequest: ({ id }) => service.post(`/api/v1/student/lessons/shift/close/${id}`),
  addRating: ({ data }) => service.post('/api/v1/student/lessons/rating', { data }),
  revokeRating: ({ tId, gId }) => service.post(`/api/v1/student/lessons/rating?teacher=${tId}&group=${gId}`)
};
