import React from 'react';

import { Container } from './style';
import { NormalInput } from '../Forms/Inputs';
import Dropdown from '../Forms/Dropdowns';
import { languages } from '../../data/dropdown';

export default ({ formik }) => (
  <Container>
    Add Subject

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
    <Dropdown
      color="#FFFFFF"
      placeholder="Language"
      name="lang"
      type={formik.touched.lang
                && formik.errors.lang && 'error'}
      helperText={formik.errors.lang}
      options={languages}
      value={
        formik.values.lang
                && languages.find((el) => el.value === formik.values.lang).id
      }
      onChange={(e) => formik.setFieldValue('lang', languages.find((el) => el.id === e).value)}
      size="large"
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
    <Dropdown
      color="#FFFFFF"
      placeholder="Language"
      name="lang"
      type={formik.touched.lang
                && formik.errors.lang && 'error'}
      helperText={formik.errors.lang}
      options={languages}
      value={
        formik.values.lang
                && languages.find((el) => el.value === formik.values.lang).id
      }
      onChange={(e) => formik.setFieldValue('lang', languages.find((el) => el.id === e).value)}
      size="large"
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
    <Dropdown
      color="#FFFFFF"
      placeholder="Language"
      name="lang"
      type={formik.touched.lang
                && formik.errors.lang && 'error'}
      helperText={formik.errors.lang}
      options={languages}
      value={
        formik.values.lang
                && languages.find((el) => el.value === formik.values.lang).id
      }
      onChange={(e) => formik.setFieldValue('lang', languages.find((el) => el.id === e).value)}
      size="large"
    />
  </Container>
);
