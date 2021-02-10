import { service } from '.';

export default {
  getSpecification: ({ id }) => service.get(`/api/v1/reports/specification?tariff=${id}`),
  // expected from=2020-10-18T00:00:00Z  to=2020-11-17T00:00:00Z
  getCashReport: ({ from, to }) => service.get(`/api/v1/reports/cash?from=${from}&to=${to}`),
  getMovements: ({ from, to }) => service.get(`/api/v1/reports/movements?from=${from}&to=${to}`)
};
