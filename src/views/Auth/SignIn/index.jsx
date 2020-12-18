import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import auth from "../../../services/auth";
import { NormalInput } from "../../../components/Forms/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import {
  AuthForm,
  ResetPassword,
  TextCenter,
  AuthHeader,
  AuthWrapper,
  Text,
  Privacy,
  SignUp,
  CustomLink,
  FooterText,
} from "../style";
import { PureCheckbox } from "../../../components/CheckBox";
import logo from "../../../assets/icons/logo2.svg";

export default () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username fieled is required"),
      password: Yup.string().required("Password field is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      auth.getToken(values).then((data) => {
        setSubmitting(false);
        history.push(
          `/verified?access_token=${data.access_token}&refresh_token=${data.refresh_token}`
        );
      });
    },
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Center className="noselect">
        <img src={logo} />
        <AuthForm onSubmit={formik.handleSubmit}>
          <AuthHeader>
            <Text>Sign In</Text>
          </AuthHeader>
          <TextCenter>
            Just sign in if you have an account. Enjoy our Website.
          </TextCenter>
          <NormalInput
            white
            size="large"
            placeholder="Username"
            type={formik.touched.username && formik.errors.username && "error"}
            helperText={
              formik.touched.username &&
              formik.errors.username &&
              formik.errors.username
            }
            value={formik.values.username}
            onChange={(e) => formik.setFieldValue("username", e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Password"
            type={formik.touched.password && formik.errors.password && "error"}
            helperText={
              formik.touched.password &&
              formik.errors.password &&
              formik.errors.password
            }
            value={formik.values.password}
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
          />
          <TextCenter>
            <TextCenter.Left>
              <PureCheckbox type="checkbox" readOnly />
            </TextCenter.Left>
            Remember me
            <TextCenter.Right>
              <ResetPassword onClick={() => history.push("/reset")}>
                Forget password?
              </ResetPassword>
            </TextCenter.Right>
          </TextCenter>
          <PrimaryButton title="Sign in" type="submit" size="large" />
          <FooterText>
            <SignUp onClick={() => history.push("/signup")}>
              Cant login? Sign up for new user?
            </SignUp>
            <Privacy>
              By signing up, you confirm that you've read and accepted our
              <CustomLink onClick={() => history.push("/reset")}>
                {" "}
                User Notice{" "}
              </CustomLink>
              and
              <CustomLink onClick={() => history.push("/reset")}>
                {" "}
                Privacy Policy
              </CustomLink>
              .
            </Privacy>
          </FooterText>
        </AuthForm>
      </AuthWrapper.Center>
    </AuthWrapper>
  );
};
