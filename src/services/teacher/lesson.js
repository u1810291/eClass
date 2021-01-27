/* eslint-disable camelcase */
import { service } from '..';

export default {
  getAll: ({ params }) => service.get(`/api/v1/teacher/lessons/list?${params}`),
  startLesson: ({ id }) => service.post(`/api/v1/teacher/lessons/${id}/start`),
  finishLesson: ({ id }) => service.post(`/api/v1/teacher/lessons/${id}/finish`),
  cancelLesson: ({ id, data }) => service.post(`/api/v1/teacher/lessons/${id}/cancel`, { data }),
  rescheduleLesson: ({ id, data }) => service.post(`/api/v1/teacher/lessons/${id}/shift`, { data }),
  responseReschedule: ({ id, data }) => service.post(`/api/v1/teacher/lessons/shift/propose/${id}`, { data }),
  rejectReschedule: ({ id }) => service.post(`/api/v1/teacher/lessons/shift/reject/${id}`),
  addRating: ({ data }) => service.post('/api/v1/teacher/lessons/rating', { data }),
  revokeRating: ({ tId, gId }) => service.post(`/api/v1/teacher/lessons/rating?teacher=${tId}&group=${gId}`)
};
