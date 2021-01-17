/* eslint-disable no-console */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../../views/Auth/SignIn';
import ResetForm from '../../views/Auth/ResetForm';
import PinCodeSignIn from '../../views/Auth/PinCodeSignIn';
import ChangePassword from '../../views/Auth/ChangePassword';
import VerifiedPage from '../../views/Auth/VerifiedPage';
import { Container } from './style';
import appSelector from '../../redux/selectors/app';
import Home from '../Home';
import SignUp from '../../views/Auth/SignUp';
import { userInfo } from '../../redux/modules/user/actions';
import user from '../../services/user';

export default () => {
  const { access_token, showModal } = useSelector(appSelector, shallowEqual);
  const dispatch = useDispatch();
  if (access_token) {
    user.whoAmI().then((res) => {
      console.log(res);
      dispatch(userInfo(res));
    }).catch((err) => console.log('err', err));
  }
  const publicRoutes = (
    <Container>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/reset" component={ResetForm} />
        <Route exact path="/pin-signin" component={PinCodeSignIn} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/verified" component={VerifiedPage} />
        <Redirect from="*" to="/signin" />
      </Switch>
    </Container>
  );

  const protectedRoutes = (
    <Container show={showModal}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );

  return access_token ? protectedRoutes : publicRoutes;
};
