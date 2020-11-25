import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import auth from "../../../services/auth";
import { NormalInput } from "../../../components/Inputs";
import { InputContainer } from "../style";

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
        history.push(`/verified?userId=${data.userId}&token=${data.token}`);
      });
    },
  });
  return (
    <div>
      <InputContainer>
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
      </InputContainer>
      <button title="Sign in" type="submit">
        Submit
      </button>
    </div>
  );
};
