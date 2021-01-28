import React from 'react';
import { NormalInput } from '../../../../../components/Forms/Inputs';
import { Container } from './style';

export default ({ formik }) => (
  <Container>
    <hr />
    <NormalInput
      white
      size="large"
      placeholder="School number"
      type={formik.touched.username && formik.errors.username && 'error'}
      helperText={formik.touched.username && formik.errors.username && formik.errors.username}
      value={formik.values.username}
      onChange={(e) => formik.setFieldValue('username', e.target.value)}
    />
  </Container>
);
