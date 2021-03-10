import React from 'react';

import { Container } from './style';
import { NormalInput } from '../Forms/Inputs';
import { PrimaryButton } from '../Buttons';

export default ({ formik }) => (
  <Container>
    <NormalInput
      placeholder="Subject Name"
      white
      name="name"
      size="large"
      type={formik.touched.name && formik.errors.name && 'error'}
      helperText={formik.touched.name
            && formik.errors.name && formik.errors.name}
      value={formik.values.name}
      onChange={(e) => formik.setFieldValue('name', e.target.value)}
    />
    <NormalInput
      placeholder="Description"
      white
      name="description"
      size="large"
      type={formik.touched.description && formik.errors.description && 'error'}
      helperText={formik.touched.description
            && formik.errors.description && formik.errors.description}
      value={formik.values.description}
      onChange={(e) => formik.setFieldValue('description', e.target.value)}
    />
    <NormalInput
      placeholder="Subject Name"
      white
      name="name"
      size="large"
      type={formik.touched.name && formik.errors.name && 'error'}
      helperText={formik.touched.name
            && formik.errors.name && formik.errors.name}
      value={formik.values.name}
      onChange={(e) => formik.setFieldValue('name', e.target.value)}
    />
    <NormalInput
      placeholder="Description"
      white
      name="description"
      size="large"
      type={formik.touched.description && formik.errors.description && 'error'}
      helperText={formik.touched.description
            && formik.errors.description && formik.errors.description}
      value={formik.values.description}
      onChange={(e) => formik.setFieldValue('description', e.target.value)}
    />
    <NormalInput
      placeholder="Subject Name"
      white
      name="name"
      size="large"
      type={formik.touched.name && formik.errors.name && 'error'}
      helperText={formik.touched.name
            && formik.errors.name && formik.errors.name}
      value={formik.values.name}
      onChange={(e) => formik.setFieldValue('name', e.target.value)}
    />
    <NormalInput
      placeholder="Description"
      white
      name="description"
      size="large"
      type={formik.touched.description && formik.errors.description && 'error'}
      helperText={formik.touched.description
            && formik.errors.description && formik.errors.description}
      value={formik.values.description}
      onChange={(e) => formik.setFieldValue('description', e.target.value)}
    />
    <PrimaryButton
      title="Add subject"
      size="large"
      onClick={() => handleSubjectAdd()}
    />
  </Container>
);
