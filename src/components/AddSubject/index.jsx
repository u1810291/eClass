import React from 'react';

import { Container, Body } from './style';
import { NormalInput } from '../Forms/Inputs';
import { PrimaryButton } from '../Buttons';

export default ({ subjectAddFormik }) => {
  const { formik, handleSubjectAdd } = subjectAddFormik();
  return (
    <Container>
      <Body onSubmit={formik.handleSubmit}>
        <NormalInput
          placeholder="Subject Name"
          white
          name="en_name"
          size="large"
          type={formik.touched.en_name && formik.errors.en_name && 'error'}
          helperText={formik.touched.en_name
            && formik.errors.en_name && formik.errors.en_name}
          value={formik.values.en_name}
          onChange={(e) => formik.setFieldValue('en_name', e.target.value)}
        />
        <NormalInput
          placeholder="Description"
          white
          name="en_description"
          size="large"
          type={formik.touched.en_description && formik.errors.en_description && 'error'}
          helperText={formik.touched.en_description
            && formik.errors.en_description && formik.errors.en_description}
          value={formik.values.en_description}
          onChange={(e) => formik.setFieldValue('en_description', e.target.value)}
        />
        <NormalInput
          placeholder="Subject Name in Russian"
          white
          name="ru_name"
          size="large"
          type={formik.touched.ru_name && formik.errors.ru_name && 'error'}
          helperText={formik.touched.ru_name
            && formik.errors.ru_name && formik.errors.ru_name}
          value={formik.values.ru_name}
          onChange={(e) => formik.setFieldValue('ru_name', e.target.value)}
        />
        <NormalInput
          placeholder="Description in Russian"
          white
          name="ru_description"
          size="large"
          type={formik.touched.ru_description && formik.errors.ru_description && 'error'}
          helperText={formik.touched.ru_description
            && formik.errors.ru_description && formik.errors.ru_description}
          value={formik.values.ru_description}
          onChange={(e) => formik.setFieldValue('ru_description', e.target.value)}
        />
        <NormalInput
          placeholder="Subject Name in Uzbek"
          white
          name="uz_name"
          size="large"
          type={formik.touched.uz_name && formik.errors.uz_name && 'error'}
          helperText={formik.touched.uz_name
            && formik.errors.uz_name && formik.errors.uz_name}
          value={formik.values.uz_name}
          onChange={(e) => formik.setFieldValue('uz_name', e.target.value)}
        />
        <NormalInput
          placeholder="Description in Uzbek"
          white
          name="uz_description"
          size="large"
          type={formik.touched.uz_description && formik.errors.uz_description && 'error'}
          helperText={formik.touched.uz_description
            && formik.errors.uz_description && formik.errors.uz_description}
          value={formik.values.uz_description}
          onChange={(e) => formik.setFieldValue('uz_description', e.target.value)}
        />
      </Body>
      <PrimaryButton
        title="Add subject"
        size="large"
        onClick={() => handleSubjectAdd()}
      />
    </Container>
  );
};
