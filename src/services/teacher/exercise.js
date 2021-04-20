import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/teacher/exercise/homework/list?${query}`),
  getQuizes: () => service.get('/api/v1/teacher/exercise/controlwork/list'),
  addHomework: (id, data) => service.post(`/api/v1/teacher/exercise/homework/${id}`, data),
  addQuize: ({ id, data }) => service.post(`/api/v1/teacher/exercise/controlwork/${id}`, data),
  // TODO Needs to be checked before using
  deleteQuize: (id) => service.delete(`/api/v1/teacher/exercise/controlwork/${id}`),

  markExercise: ({ id, mark }) => service.post(`/api/v1/teacher/exercise/mark/${id}?mark=${mark}`),
  markExerciseToUploaded: ({ id, mark }) => service.post(`/api/v1/teacher/exercise/mark/${id}/student-new?mark=${mark}`)

};
