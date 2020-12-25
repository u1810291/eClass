import {useSelector, shallowEqual} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

import SignIn from "../../views/Auth/SignIn";
import ResetForm from "../../views/Auth/ResetForm";
import PinCodeSignIn from "../../views/Auth/PinCodeSignIn";
import ChangePassword from "../../views/Auth/ChangePassword";
import VerifiedPage from "../../views/Auth/VerifiedPage";
import {Container} from "./style";
import appSelector from "../../redux/selectors/app";
import Home from "../Home";
import SignUp from "../../views/Auth/SignUp";
import {userInfo} from "../../redux/modules/user/actions";
import {useAsync} from "../../hooks";
import user from "../../services/user";
import auth from "../../services/auth";

export default () => {
  const dispatch = useDispatch();
  const asyncTask = useAsync();
  const {access_token, showModal} = useSelector(appSelector, shallowEqual);

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

  if (access_token) {
    const promise = user.whoAmI();
    asyncTask(promise)
      .then((res) => {
        dispatch(userInfo(res));
      })
      .catch((error) => {
        const originalReq = error.config;
        console.log(originalReq);
        console.log(error);
        const refresh_token = sessionStorage.getItem("refresh_token");
        auth
          .refreshToken(refresh_token)
          .then((res) => {
            console.log(res);
            sessionStorage.setItem("access_token", res.access_token);
            sessionStorage.setItem("refresh_token", res.refresh_token);
          })
          .catch((err) => console.log(err));
      });
  }
  const protectedRoutes = (
    <Container show={showModal}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );

  return access_token ? protectedRoutes : publicRoutes;
};
