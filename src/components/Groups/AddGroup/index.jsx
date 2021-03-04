import React, { useState } from 'react';

import {
  Container, Body, Header, Footer, Main
} from './style';
import { NormalInput, SingleDatePicker } from '../../Forms/Inputs';
import Dropdown from '../../Forms/Dropdowns';
import { dropdownOptions, languages } from '../../../data/dropdown';

import Card from '../../Card';

export default (formik) => {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
      <Card>
        <Body>
          <Header>
            <NormalInput
              placeholder="Group name"
              value={formik.values.name}
              type={formik.touched.name
                && formik.errors.name && 'error'}
              helperText={formik.touched.name && formik.errors.name && 'error'}
              onChange={(e) => formik.setFieldValue('name', e.tartget.value)}
              name="name"
              size="large"
            />
            <NormalInput
              placeholder="Official name"
              value={formik.values.official_name}
              type={formik.touched.official_name
                && formik.errors.official_name && 'error'}
              helperText={formik.touched.official_name
                && formik.errors.official_name && 'error'}
              onChange={(e) => formik.setFieldValue('official_name', e.tartget.value)}
              name="official_name"
              size="large"
            />
            <NormalInput
              placeholder="Description"
              value={formik.values.description}
              type={formik.touched.description
                && formik.errors.description && 'error'}
              helperText={formik.touched.description && formik.errors.description && 'error'}
              onChange={(e) => formik.setFieldValue('description', e.tartget.value)}
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
              value={formik.values.salary_percent}
              type={formik.touched.salary_percent
                && formik.errors.salary_percent && 'error'}
              helperText={formik.touched.salary_percent && formik.errors.salary_percent && 'error'}
              onChange={(e) => formik.setFieldValue('salary_percent', e.tartget.value)}
              name="salary_percent"
              size="large"
            />
            <NormalInput
              placeholder="Number of room"
              value={formik.values.official_name}
              type={formik.touched.official_name
                && formik.errors.official_name && 'error'}
              helperText={formik.touched.official_name && formik.errors.official_name && 'error'}
              onChange={(e) => formik.setFieldValue('official_name', e.tartget.value)}
              name="official_name"
              size="large"
            />
            <NormalInput
              placeholder="Price for one lesson"
              value={formik.values.price}
              type={formik.touched.price
                && formik.errors.price && 'error'}
              helperText={formik.touched.price && formik.errors.price && 'error'}
              onChange={(e) => formik.setFieldValue('price', e.tartget.value)}
              name="price"
              size="large"
            />
            <NormalInput
              label="Price for one lesson with discount"
              placeholder="Price for one lesson with discount"
              value={formik.values.price_with_discount}
              type={formik.touched.price_with_discount
                && formik.errors.price_with_discount && 'error'}
              helperText={formik.touched.price_with_discount && formik.errors.price_with_discount && 'error'}
              onChange={(e) => formik.setFieldValue('price_with_discount', e.tartget.value)}
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
