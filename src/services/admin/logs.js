import { service } from '..';

export default {
  getAll: (query) => service.get(`/api/v1/logs?${query}`)
};
