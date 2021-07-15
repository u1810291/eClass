import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import auth from '../../../services/auth';
import { PrimaryButton } from '../../../components/Buttons';
import Dropdown from '../../../components/Forms/Dropdowns';
import { NormalInput, PasswordInput, CustomDatePickerV2 } from '../../../components/Forms/Inputs';
import {
  AuthForm, ResetPassword, TextCenter, AuthFooter, AuthHeader, AuthWrapper, Text
} from './style';
import dashboard from '../../../assets/images/dashboard.jpg';

export default () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      lang: '',
      email: '',
      username: '',
      password: '',
      last_name: '',
      first_name: '',
      date_of_birth: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email field is required').email('Invalid email address'),
      password: Yup.string().required('Password field is required'),
      username: Yup.string().required('Username required'),
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      date_of_birth: Yup.string().required('Date of birth is required'),
      lang: Yup.string().required('Choose the language')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      auth.getToken(values).then((data) => {
        setSubmitting(false);
        history.push(`/verified?userId=${data.userId}&token=${data.token}`);
      });
    }
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Left>
        <AuthHeader>
          <Text className={classNames('heading-5', 'weight-medium', 'text-black-800')}>Create Account</Text>
        </AuthHeader>
        <AuthForm onSubmit={formik.handleSubmit}>
          <NormalInput
            white
            size="large"
            placeholder="Email"
            type={formik.touched.email && formik.errors.email && 'error'}
            helperText={formik.touched.email && formik.errors.email && formik.errors.email}
            value={formik.values.email}
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Username"
            value={formik.values.username}
            type={formik.touched.username && formik.errors.username && 'error'}
            typePwd={formik.touched.username && formik.errors.username && 'error'}
            helperText={formik.touched.username && formik.errors.username && formik.errors.username}
            onChange={(e) => formik.setFieldValue('username', e.target.value)}
          />
          <CustomDatePickerV2
            name="date_of_birth"
            placeholder="Date of birth"
            lang="en"
            value={formik.values.date_of_birth}
            type={formik.touched.date_of_birth
                    && formik.errors.date_of_birth && 'error'}
            size="large"
            helperText={formik.errors.date_of_birth}
            onChange={(value) => {
              formik.setFieldValue('date_of_birth', value);
            }}
          />
          <NormalInput
            white
            size="large"
            placeholder="First name"
            value={formik.values.first_name}
            type={formik.touched.first_name && formik.errors.first_name && 'error'}
            helperText={formik.touched.first_name
              && formik.errors.first_name
              && formik.errors.first_name}
            onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Last name"
            value={formik.values.last_name}
            type={formik.touched.last_name && formik.errors.last_name && 'error'}
            helperText={formik.touched.last_name
              && formik.errors.last_name
              && formik.errors.last_name}
            onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
          />
          <Dropdown
            white
            size="large"
            placeholder="Language"
            options={[{ id: 1, value: 'ru' }, { id: 2, value: 'uz' }]}
            value={formik.values.lang}
            type={formik.touched.lang && formik.errors.lang && 'error'}
            helperText={formik.touched.lang && formik.errors.lang && formik.errors.lang}
            onChange={(e) => formik.setFieldValue('lang', e)}
          />
          <PasswordInput
            eye
            white
            size="large"
            placeholder="Password"
            value={formik.values.password}
            type={formik.touched.password && formik.errors.password && 'error'}
            typePwd={formik.touched.password && formik.errors.password && 'error'}
            helperText={formik.touched.password && formik.errors.password && formik.errors.password}
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
          />

          <PrimaryButton
            title="Sign Up"
            type="submit"
            size="large"
            disabled={
              formik.isSubmitting
              || (formik.touched.email && !!formik.errors.email)
              || (formik.touched.password && !!formik.errors.password)
            }
          />
          <TextCenter>
            <ResetPassword
              className={classNames('body-medium', 'weight-regular', 'text-black-800')}
              onClick={() => history.push('/reset')}
            >
              Forget password?
            </ResetPassword>
          </TextCenter>
        </AuthForm>
        <AuthFooter className={classNames('caption', 'weight-regular', 'text-black-800')}>
          <div>@2020 All Rights Reserved.</div>
          <div>
            <span>Privacy and Terms </span>
          </div>
        </AuthFooter>
      </AuthWrapper.Left>
      <AuthWrapper.Right>
        <div />
        <img src={dashboard} alt="dashboard" />
      </AuthWrapper.Right>
    </AuthWrapper>
  );
};
