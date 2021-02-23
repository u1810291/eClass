import React from 'react';
import { MainInfo } from '../style';
import { NormalInput } from '../../../../../../components/Forms/Inputs';

export const GeneralInfo = ({ formik }) => (
  <MainInfo>
    <NormalInput
      white
      name="first_name"
      size="large"
      placeholder="First name"
      type={formik.touched.first_name && formik.errors.first_name && 'error'}
      helperText={formik.touched.first_name
                && formik.errors.first_name && formik.errors.first_name}
      value={formik.values.first_name}
      onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
    />
    <NormalInput
      white
      size="large"
      placeholder="Last name"
      type={formik.touched.last_name && formik.errors.last_name && 'error'}
      helperText={formik.touched.last_name
                && formik.errors.last_name && formik.errors.last_name}
      value={formik.values.last_name}
      name="last_name"
      onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
    />
    <NormalInput
      white
      size="large"
      placeholder="Middle name"
      type={formik.touched.middle_name && formik.errors.middle_name && 'error'}
      helperText={formik.touched.middle_name
                && formik.errors.middle_name && formik.errors.middle_name}
      value={formik.values.middle_name}
      name="middle_name"
      onChange={(e) => formik.setFieldValue('middle_name', e.target.value)}
    />
    <NormalInput
      white
      size="large"
      placeholder="Username"
      type={formik.touched.username && formik.errors.username && 'error'}
      helperText={formik.touched.username
                && formik.errors.username && formik.errors.username}
      value={formik.values.username}
      name="username"
      onChange={(e) => formik.setFieldValue('username', e.target.value)}
    />
    <NormalInput
      white
      size="large"
      placeholder="Password"
      type={formik.touched.password && formik.errors.password && 'error'}
      helperText={formik.touched.password
                && formik.errors.password && formik.errors.password}
      value={formik.values.password}
      name="password"
      onChange={(e) => formik.setFieldValue('password', e.target.value)}
    />
    <NormalInput
      white
      size="large"
      placeholder="Email"
      type={formik.touched.email && formik.errors.email && 'error'}
      helperText={formik.touched.email
                && formik.errors.email && formik.errors.email}
      value={formik.values.email}
      name="email"
      onChange={(e) => formik.setFieldValue('email', e.target.value)}
    />
  </MainInfo>
);

export default GeneralInfo;
