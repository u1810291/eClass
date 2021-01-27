import { service } from '..';

export default {
  getExercises: ({ id }) => service.get(`/api/v1/student/exercise/homework/list?lesson=${id}`),
  getQuizes: ({ id }) => service.get(`/api/v1/student/exercise/controlwork/list?lesson=${id}`),
  submitExercise: ({ id, data }) => service.post(`/api/v1/student/exercise/${id}`, { data }),
  updateExercise: ({ id, data }) => service.put(`/api/v1/student/exercise/update/${id}`, { data }),
  deleteExercise: ({ id }) => service.delete(`/api/v1/student/exercise/${id}`)

};
