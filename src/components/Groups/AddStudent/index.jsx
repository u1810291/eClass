import React from 'react';
import { Container } from './style';
import Dropdown from '../../Forms/Dropdowns';
import { PrimaryButton } from '../../Buttons';

export default ({ handleAddStudent }) => {
  const { formik, students } = handleAddStudent();
  return (
    <Container onSubmit={formik.handleSubmit}>
      <Dropdown
        placeholder="Language"
        options={students}
        type={formik.touched.student_id
                && formik.errors.student_id && 'error'}
        helperText={formik.errors.student_id}
        value={formik.values.student_id}
        onChange={(e) => formik.setFieldValue('student_id', e)}
        size="large"
      />
      <PrimaryButton type="submit" title="Add Student" size="medium" />
    </Container>
  );
};
