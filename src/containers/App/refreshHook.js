/* eslint-disable no-console */
import { useAsync } from '../../hooks';
import user from '../../services/user';
import auth from '../../services/auth';

function refreshHook() {
  const asyncTask = useAsync();

  const promise = user.whoAmI();
  asyncTask(promise)
    .then((res) => {
      console.log(res);
      return { res };
    })
    .catch((error) => {
      const originalReq = error.config;
      console.log(originalReq);
      console.log(error);
      // eslint-disable-next-line camelcase
      const refresh_token = sessionStorage.getItem('refresh_token');
      auth
        .refreshToken(refresh_token)
        .then((res) => {
          console.log(res);
          sessionStorage.setItem('access_token', res.access_token);
          sessionStorage.setItem('refresh_token', res.refresh_token);
        })
        .catch((err) => console.log(err));
    });
}

export default refreshHook;
