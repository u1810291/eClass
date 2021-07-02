import { service } from '.';

export default {
  getMethods: () => service.get('/api/v1/payment/methods')
};
