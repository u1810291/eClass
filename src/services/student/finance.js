import { service } from '..';

export default {
  getPayments: () => service.get('/api/v1/student/finance/payments'),
  getBalance: () => service.get('/api/v1/student/finance/accounts')
};
