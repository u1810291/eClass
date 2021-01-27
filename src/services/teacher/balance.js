import { service } from '..';

export default {
  getSalary: ({ params }) => service.get(`/api/v1/teacher/finance/payments?${params}`),
  getBalance: () => service.get('/api/v1/teacher/finance/accounts')
};
