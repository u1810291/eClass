/* eslint-disable camelcase */
import { service } from '..';

export default {
  getLessons: (query) => service.get(`/api/v1/lessons/list?${query}`),
  getLesonStudentId: ({ id }) => service.get(`/api/v1/lessons/${id}`),
  createLesson: ({ data }) => service.post('/api/v1/lessons', { data }),
  updateLessonIdInBody: ({ data }) => service.put('/api/v1/lessons/', data),
  updateLessonIdInParams: ({ id, data }) => service.put(`/api/v1/lessons/${id}`, data),
  cancelLesson: ({ id }) => service.post(`/api/v1/lessons/${id}/cancel`),
  cancelLessonUndo: ({ id }) => service.post(`/api/v1/lessons/${id}/cancel/undo`),
  startLesson: ({ id }) => service.post(`/api/v1/lessons/${id}/start`),
  finishLesson: ({ id }) => service.post(`/api/v1/lessons/${id}/finish`),
  finishLessonUndo: ({ id }) => service.post(`/api/v1/lessons/${id}/finish/undo`)
};
