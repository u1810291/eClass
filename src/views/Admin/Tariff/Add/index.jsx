import React from 'react';

import { NormalInput } from '../../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../../components/Buttons';
import { Container, Form } from './style';

export default ({ useAddForm }) => {
  const { formik } = useAddForm();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Container>
        <NormalInput
          white
          name="name"
          size="large"
          placeholder="Name"
          type={formik.touched.name && formik.errors.name && 'error'}
          helperText={formik.touched.name
                  && formik.errors.name && formik.errors.name}
          value={formik.values.name}
          onChange={(e) => formik.setFieldValue('name', e.target.value)}
        />
        <NormalInput
          white
          name="description"
          size="large"
          placeholder="Description"
          type={formik.touched.description && formik.errors.description && 'error'}
          helperText={formik.touched.description
                  && formik.errors.description && formik.errors.description}
          value={formik.values.description}
          onChange={(e) => formik.setFieldValue('description', e.target.value)}
        />
        <NormalInput
          white
          name="amount"
          size="large"
          placeholder="Amount"
          type={formik.touched.amount && formik.errors.amount && 'error'}
          helperText={formik.touched.amount
                  && formik.errors.amount && formik.errors.amount}
          value={formik.values.amount}
          onChange={(e) => formik.setFieldValue('amount', e.target.value)}
        />
        <NormalInput
          white
          name="lessons_count"
          size="large"
          placeholder="Lessons Number"
          type={formik.touched.lessons_count && formik.errors.lessons_count && 'error'}
          helperText={formik.touched.lessons_count
                  && formik.errors.lessons_count && formik.errors.lessons_count}
          value={formik.values.lessons_count}
          onChange={(e) => formik.setFieldValue('lessons_count', e.target.value)}
        />
        <NormalInput
          white
          name="tariff_name_ru"
          size="large"
          placeholder="Tariff Name in russian"
          type={formik.touched.tariff_name_ru && formik.errors.tariff_name_ru && 'error'}
          helperText={formik.touched.tariff_name_ru
                  && formik.errors.tariff_name_ru && formik.errors.tariff_name_ru}
          value={formik.values.tariff_name_ru}
          onChange={(e) => formik.setFieldValue('tariff_name_ru', e.target.value)}
        />
        <NormalInput
          white
          name="tariff_description_ru"
          size="large"
          placeholder="Tariff Description in russian"
          type={formik.touched.tariff_description_ru && formik.errors.tariff_description_ru && 'error'}
          helperText={formik.touched.tariff_description_ru
                  && formik.errors.tariff_description_ru && formik.errors.tariff_description_ru}
          value={formik.values.tariff_description_ru}
          onChange={(e) => formik.setFieldValue('tariff_description_ru', e.target.value)}
        />
        <NormalInput
          white
          name="tariff_name_uz"
          size="large"
          placeholder="Tariff Name in uzbek"
          type={formik.touched.tariff_name_uz && formik.errors.tariff_name_uz && 'error'}
          helperText={formik.touched.tariff_name_uz
                  && formik.errors.tariff_name_uz && formik.errors.tariff_name_uz}
          value={formik.values.tariff_name_uz}
          onChange={(e) => formik.setFieldValue('tariff_name_uz', e.target.value)}
        />
        <NormalInput
          white
          name="tariff_description_uz"
          size="large"
          placeholder="Tariff Description in uzbek"
          type={formik.touched.tariff_description_uz && formik.errors.tariff_description_uz && 'error'}
          helperText={formik.touched.tariff_description_uz
                  && formik.errors.tariff_description_uz && formik.errors.tariff_description_uz}
          value={formik.values.tariff_description_uz}
          onChange={(e) => formik.setFieldValue('tariff_description_uz', e.target.value)}
        />
        <PrimaryButton type="submit" title="Add tariff" size="large" />
      </Container>
    </Form>
  );
};
