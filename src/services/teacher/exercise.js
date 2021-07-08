import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/teacher/exercise/homework/list?${query}`),
  getQuizes: () => service.get('/api/v1/teacher/exercise/controlwork/list'),
  getSingleExercise: (id) => service.get(`/api/v1/teacher/exercise/${id}/results`),
  addHomework: (id, data) => service.post(`/api/v1/teacher/exercise/homework/${id}`, data),
  addQuize: (id, data) => service.post(`/api/v1/teacher/exercise/controlwork/${id}`, data),
  // TODO Needs to be checked before using
  deleteExercise: (id) => service.delete(`/api/v1/teacher/exercise/controlwork/${id}`),

  markExercise: (id, mark) => service.post(`/api/v1/teacher/exercise/mark/${id}?mark=${mark}`),
  markExerciseToUploaded: (id, mark) => service.post(`/api/v1/teacher/exercise/mark/${id}/student-new?mark=${mark}`)
    .then((response) => {
      const extension = response.headers['content-type'].split('/');
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${id}.${extension[1]}`); // or any other extension
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
};
