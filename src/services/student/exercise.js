import { service } from '..';

export default {
  getAll: (query) => service.get(`api/v1/student/exercise/homework/list?${query}`),
  getQuizes: (query) => service.get(`/api/v1/student/exercise/controlwork/list?${query}`),
  getExercises: (id) => service.get(`/api/v1/student/exercise/homework/list?lesson=${id}`),
  downloadExercise: (id) => service.get(`/api/v1/files/exercise/${id}`, { responseType: 'blob' })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      const extension = response.headers['content-type'].split('/');
      // eslint-disable-next-line no-nested-ternary
      const ext = extension[1] === 'vnd.ms-excel'
        ? 'xls'
        : extension[0] === 'text' ? 'txt' : extension[1];
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${id}.${ext}`); // or any other extension
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }),
  submitExercise: (id, data) => service.post(`/api/v1/student/exercise/${id}`, data),
  updateExercise: (id, data) => service.post(`/api/v1/student/exercise/update/${id}`, data),
  deleteExercise: (id) => service.delete(`/api/v1/student/exercise/${id}`)

};
