import React from 'react';

import { Container, Body } from './style';
import { NormalInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';
import Dropdown from '../../Forms/Dropdowns';
import { languages } from '../../../data/dropdown';

export default ({ subjectAddFormik }) => {
  const { formik } = subjectAddFormik();
  return (
    <Container onSubmit={formik.handleSubmit}>
      <Body>
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
        <Dropdown
          placeholder="Language"
          options={languages}
          type={formik.touched.subject_lang
                && formik.errors.subject_lang && 'error'}
          helperText={formik.errors.subject_lang}
          value={
            formik.values.subject_lang
                  && languages.find((el) => el.value === formik.values.subject_lang).id
          }
          onChange={(e) => formik.setFieldValue('subject_lang',
            languages.find((el) => el.id === e).value)}
          size="large"
          name="subject_lang"
        />
      </Body>
      <PrimaryButton
        title="Add subject"
        size="large"
        type="submit"
      />
    </Container>
  );
};
