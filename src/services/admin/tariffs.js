import { service } from '..';

export default {
  getAll: () => service.get('/api/v1/tariff/list?full=true'),
  createTariff: ({ data }) => service.put('/api/v1/tariff', data),
  updateTariffIdInBody: ({ data }) => service.put('/api/v1/tariff/', data),
  updateTariffIdInParams: ({ id, data }) => service.put(`/api/v1/tariff/${id}`, data),
  deleteTariffIdInParams: ({ id }) => service.delete(`/api/v1/tariff/${id}`),
  deleteTariffNameIdInParams: ({ id }) => service.delete(`/api/v1/tariff/${id}`)
};
