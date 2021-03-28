import React from 'react';
import { Container } from './style';
import Dropdown from '../../Forms/Dropdowns';
import { languages } from '../../../data/dropdown';

export default ({ formik }) => (
  <Container>
    <Dropdown
      placeholder="Language"
      options={languages}
      type={formik.touched.student_id
                && formik.errors.student_id && 'error'}
      helperText={formik.errors.student_id}
      value={
        formik.values.student_id
                  && languages.find((el) => el.value === formik.values.student_id).id
      }
      onChange={(e) => formik.setFieldValue('student_id',
        languages.find((el) => el.id === e).value)}
      size="large"
    />
  </Container>
);
