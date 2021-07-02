import { service } from '..';

export default {
  getGroups: (id) => service.get(`/api/v1/group/student/${id}`)
};
