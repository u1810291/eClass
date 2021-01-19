import * as table from './actions/table';
import application from './actions/application';
import sidebar from './actions/sidebar';
import auth from './actions/auth';
import profile from './actions/profile';
import others from './actions/others';

export default {
  ...table,
  ...application,
  ...sidebar,
  ...auth,
  ...profile,
  ...others
};
