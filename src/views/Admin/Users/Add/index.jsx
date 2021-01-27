import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import { NormalInput } from '../../../../components/Forms/Inputs';
import { setStudent } from '../../../../redux/modules/auth/actions';

export default () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username fieled is required'),
      password: Yup.string().required('Password field is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(setStudent(values, () => {
        setSubmitting(false);
      }));
    }
  });
  return (
    <Container>
      <NormalInput
        white
        size="large"
        placeholder="First name"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        white
        size="large"
        placeholder="Last name"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        white
        size="large"
        placeholder="Middle name"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        white
        size="large"
        placeholder="Username"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />

      <NormalInput
        white
        size="large"
        placeholder="Password"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        white
        size="large"
        placeholder="Email"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />

    </Container>
  );
};
