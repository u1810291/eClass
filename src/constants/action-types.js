import application from './actions/application';
import auth from './actions/auth';
import sidebar from './actions/sidebar';
import profile from './actions/profile';
import others from './actions/others';
import notification from './actions/notification';
import lists from './actions/lists';
import files from './actions/files';
import * as table from './actions/table';

export default {
  ...table,
  ...application,
  ...sidebar,
  ...auth,
  ...profile,
  ...others,
  ...lists,
  ...files,
  ...notification
};
