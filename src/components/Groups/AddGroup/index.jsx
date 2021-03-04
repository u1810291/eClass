import React, { useState } from 'react';

import {
  Container, Body, Header, Footer, Main
} from './style';
import { NormalInput, SingleDatePicker } from '../../Forms/Inputs';
import Dropdown from '../../Forms/Dropdowns';
import { dropdownOptions, languages } from '../../../data/dropdown';

import Card from '../../Card';

export default ({ formik }) => {
  const [date, setDate] = useState(new Date());
  console.log(formik);
  return (
    <Container>
      <Card>
        <Body>
          <Header>
            <NormalInput
              size="large"
              placeholder="Group name"
              type={formik.touched.name && formik.errors.name && 'error'}
              helperText={formik.touched.name
                     && formik.errors.name && formik.errors.name}
              value={formik.values.name}
              onChange={(e) => formik.setFieldValue('name', e.target.value)}
              name="name"
            />
            <NormalInput
              placeholder="Official name"
              type={formik.touched.official_name && formik.errors.official_name && 'error'}
              helperText={formik.touched.official_name
                     && formik.errors.official_name && formik.errors.official_name}
              value={formik.values.official_name}
              onChange={(e) => formik.setFieldValue('official_name', e.target.value)}
              name="official_name"
              size="large"
            />
            <NormalInput
              placeholder="Description"
              type={formik.touched.description && formik.errors.description && 'error'}
              helperText={formik.touched.description
                     && formik.errors.description && formik.errors.description}
              value={formik.values.description}
              onChange={(e) => formik.setFieldValue('description', e.target.value)}
              name="description"
              size="large"
            />

          </Header>
          <Main>
            <Dropdown
              placeholder="Language"
              options={languages}
              type={formik.touched.lang
                && formik.errors.lang && 'error'}
              helperText={formik.errors.lang}
              value={
                formik.values.lang
                  && languages.find((el) => el.value === formik.values.lang).id
              }
              onChange={(e) => formik.setFieldValue('lang',
                languages.find((el) => el.id === e).value)}
              size="large"
            />
            <Dropdown
              placeholder="Subject"
              options={dropdownOptions.commonOptions}
              value={formik.values.subject_id}
              onChange={(e) => formik.setFieldValue('subject_id', e)}
              helperText={formik.values.subject_id
                && formik.values.subject_id}
              type={formik.touched.subject_id
              && formik.errors.subject_id && 'error'}
              size="large"
            />
            <Dropdown
              placeholder="Teacher"
              options={dropdownOptions.commonOptions}
              value={formik.values.teacher_id}
              onChange={(e) => formik.setFieldValue('teacher_id', e)}
              helperText={formik.errors.teacher_id}
              type={formik.touched.teacher_id
                && formik.errors.teacher_id
                && 'error'}
              size="large"
            />
            <NormalInput
              placeholder="Percent for teacher"
              type={formik.touched.salary_percent && formik.errors.salary_percent && 'error'}
              helperText={formik.touched.salary_percent
                     && formik.errors.salary_percent && formik.errors.salary_percent}
              value={formik.values.salary_percent}
              onChange={(e) => formik.setFieldValue('salary_percent', e.target.value)}
              name="salary_percent"
              size="large"
            />
            <NormalInput
              placeholder="Number of room"
              type={formik.touched.official_name && formik.errors.official_name && 'error'}
              helperText={formik.touched.official_name
                     && formik.errors.official_name && formik.errors.official_name}
              value={formik.values.official_name}
              onChange={(e) => formik.setFieldValue('official_name', e.target.value)}
              name="official_name"
              size="large"
            />
            <NormalInput
              placeholder="Price for one lesson"
              type={formik.touched.price && formik.errors.price && 'error'}
              helperText={formik.touched.price
                     && formik.errors.price && formik.errors.price}
              value={formik.values.price}
              onChange={(e) => formik.setFieldValue('price', e.target.value)}
              name="price"
              size="large"
            />
            <NormalInput
              label="Price for one lesson with discount"
              placeholder="Price for one lesson with discount"
              type={formik.touched.price_with_discount && formik.errors.price_with_discount && 'error'}
              helperText={formik.touched.price_with_discount
                     && formik.errors.price_with_discount && formik.errors.price_with_discount}
              value={formik.values.price_with_discount}
              onChange={(e) => formik.setFieldValue('price_with_discount', e.target.value)}
              name="price_with_discount"
              size="large"
            />
          </Main>
          <Footer>
            <NormalInput placeholder="Duration" />
            <SingleDatePicker
              value={date}
              showTimeSelect
              placeholder="Date"
              name="start_date"
              onChange={(value) => setDate(value)}
            />
            <SingleDatePicker
              value={date}
              showTimeSelect
              placeholder="Date"
              name="finish_date"
              onChange={(value) => setDate(value)}
            />
          </Footer>
        </Body>
      </Card>
    </Container>
  );
};
