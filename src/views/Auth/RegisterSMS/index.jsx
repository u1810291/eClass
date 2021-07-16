import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthWrapper } from '../style';
import { NormalInput } from '../../../components/Forms/Inputs';
import { AuthForm } from '../SignUp/style';
import { PrimaryButton } from '../../../components/Buttons';

export default () => {
  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Code number is required')
  });
  const formik = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
    }
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Center>
        <AuthForm onSubmit={formik.handleSubmit}>
          <NormalInput
            white
            label="Please write your code"
            size="large"
            placeholder="code"
            type={formik.touched.code && formik.errors.code && 'error'}
            helperText={formik.touched.code && formik.errors.code && formik.errors.code}
            value={formik.values.code}
            onChange={(e) => formik.setFieldValue('code', e.target.value)}
          />
          <PrimaryButton type="submit" title="Submit" size="large" />
        </AuthForm>
      </AuthWrapper.Center>
    </AuthWrapper>
  );
};
