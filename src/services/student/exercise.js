import { service } from '..';

export default {
  getAll: (query) => service.get(`api/v1/student/exercise/homework/list?${query}`),
  getQuizes: (query) => service.get(`/api/v1/student/exercise/controlwork/list?${query}`),
  getExercises: (id) => service.get(`/api/v1/student/exercise/homework/list?lesson=${id}`),
  downloadExercise: (id) => service.get(`/api/v1/files/exercise/${id}`, { responseType: 'blob' }),
  submitExercise: ({ id, data }) => service.post(`/api/v1/student/exercise/${id}`, data),
  updateExercise: ({ id, data }) => service.put(`/api/v1/student/exercise/update/${id}`, data),
  deleteExercise: (id) => service.delete(`/api/v1/student/exercise/${id}`)

};
