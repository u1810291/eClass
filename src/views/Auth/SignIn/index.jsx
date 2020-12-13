import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import auth from "../../../services/auth";
import { NormalInput } from "../../../components/Forms/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import Axios from "axios";
import {
  AuthForm,
  ResetPassword,
  TextCenter,
  AuthHeader,
  AuthWrapper,
  Text,
} from "../style";

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
        console.log(data);
        setSubmitting(false);
        history.push(`/verified?userId=${data.userId}&token=${data.token}`);
      });
      // Axios.post("https://five-plus.co/api/v1/login", values)
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
    },
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Left>
        <AuthHeader>
          <Text>Sign In</Text>
        </AuthHeader>
        <TextCenter>
          Just sign in if you have an account. Enjoy our Website.
        </TextCenter>
        <AuthForm onSubmit={formik.handleSubmit}>
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
          <PrimaryButton title="Sign in" type="submit" size="large" />
          <TextCenter>
            <ResetPassword onClick={() => history.push("/reset")}>
              Forget password?
            </ResetPassword>
          </TextCenter>
        </AuthForm>
      </AuthWrapper.Left>
    </AuthWrapper>
  );
};
