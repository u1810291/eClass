import { service } from '..';

export default {
  getHomeworks: ({ id }) => service.get(`/api/v1/teacher/exercise/homework/list?lesson=${id}&full=true`),
  getQuizes: ({ id }) => service.get(`/api/v1/teacher/exercise/controlwork/list?lesson=${id}&full=true`),
  addHomework: ({ id, data }) => service.post(`/api/v1/teacher/exercise/homework/${id}`, { data }),
  addQuize: ({ id, data }) => service.post(`/api/v1/teacher/exercise/controlwork/${id}`, { data }),
  // TODO Needs to be checked before using
  deleteQuize: ({ id }) => service.delete(`/api/v1/teacher/exercise/controlwork/${id}`),

  markExercise: ({ id, mark }) => service.post(`/api/v1/teacher/exercise/mark/${id}?mark=${mark}`),
  markExerciseToUploaded: ({ id, mark }) => service.post(`/api/v1/teacher/exercise/mark/${id}/student-new?mark=${mark}`)

};
