import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import {
  Container, Body, Header, Footer, Main, StudyCard
} from './style';
import { NormalInput, SingleDatePicker } from '../../Forms/Inputs';
import Dropdown from '../../Forms/Dropdowns';
import { languages } from '../../../data/dropdown';
import { PrimaryButton } from '../../Buttons';
import Card from '../../Card';
import StudyDays from './StudyDays';

export default ({ handleEdit }) => {
  const [start, setStart] = useState(new Date());
  const [finish, setFinish] = useState(new Date());
  const { formik, single } = handleEdit();
  // eslint-disable-next-line no-console
  console.log(single);
  const { data } = useSelector((state) => state.adminSubjectsReducers);
  const { users: teachers } = useSelector((state) => state.listsReducers);
  return (
    <Container>
      <Card>
        <Body onSubmit={formik.handleSubmit}>
          <Header>
            <NormalInput
              label="Group name"
              size="large"
              placeholder="Group name"
              type={formik.touched.en_name && formik.errors.en_name && 'error'}
              helperText={formik.touched.en_name
                     && formik.errors.en_name && formik.errors.en_name}
              value={formik.values.en_name}
              onChange={(e) => formik.setFieldValue('en_name', e.target.value)}
              name="en_name"
            />
            <NormalInput
              placeholder="Official name in english"
              type={formik.touched.official_en_name && formik.errors.official_en_name && 'error'}
              helperText={formik.touched.official_en_name
                     && formik.errors.official_en_name && formik.errors.official_en_name}
              value={formik.values.official_en_name}
              onChange={(e) => formik.setFieldValue('official_en_name', e.target.value)}
              name="official_en_name"
              size="large"
            />
            <NormalInput
              placeholder="Description"
              type={formik.touched.en_description && formik.errors.en_description && 'error'}
              helperText={formik.touched.en_description
                     && formik.errors.en_description && formik.errors.en_description}
              value={formik.values.en_description}
              onChange={(e) => formik.setFieldValue('en_description', e.target.value)}
              name="en_description"
              size="large"
            />
            <NormalInput
              size="large"
              placeholder="Group name in russian"
              type={formik.touched.name && formik.errors.ru_name && 'error'}
              helperText={formik.touched.ru_name
                     && formik.errors.ru_name && formik.errors.ru_name}
              value={formik.values.ru_name}
              onChange={(e) => formik.setFieldValue('ru_name', e.target.value)}
              name="ru_name"
            />
            <NormalInput
              placeholder="Official name in russian"
              type={formik.touched.official_ru_name && formik.errors.official_ru_name && 'error'}
              helperText={formik.touched.official_ru_name
                     && formik.errors.official_ru_name && formik.errors.official_ru_name}
              value={formik.values.official_ru_name}
              onChange={(e) => formik.setFieldValue('official_ru_name', e.target.value)}
              name="official_ru_name"
              size="large"
            />
            <NormalInput
              placeholder="Description in russian"
              type={formik.touched.ru_description && formik.errors.ru_description && 'error'}
              helperText={formik.touched.ru_description
                     && formik.errors.ru_description && formik.errors.ru_description}
              value={formik.values.ru_description}
              onChange={(e) => formik.setFieldValue('ru_description', e.target.value)}
              name="ru_description"
              size="large"
            />
            <NormalInput
              size="large"
              placeholder="Group name in uzbek"
              type={formik.touched.uz_name && formik.errors.uz_name && 'error'}
              helperText={formik.touched.uz_name
                     && formik.errors.uz_name && formik.errors.uz_name}
              value={formik.values.uz_name}
              onChange={(e) => formik.setFieldValue('uz_name', e.target.value)}
              name="uz_name"
            />
            <NormalInput
              placeholder="Official name in uzbek"
              type={formik.touched.official_uz_name && formik.errors.official_uz_name && 'error'}
              helperText={formik.touched.official_uz_name
                     && formik.errors.official_uz_name && formik.errors.official_uz_name}
              value={formik.values.official_uz_name}
              onChange={(e) => formik.setFieldValue('official_uz_name', e.target.value)}
              name="official_uz_name"
              size="large"
            />
            <NormalInput
              placeholder="Description in uzbek"
              type={formik.touched.uz_description && formik.errors.uz_description && 'error'}
              helperText={formik.touched.uz_description
                     && formik.errors.uz_description && formik.errors.uz_description}
              value={formik.values.uz_description}
              onChange={(e) => formik.setFieldValue('uz_description', e.target.value)}
              name="uz_description"
              size="large"
            />
          </Header>
          <StudyCard>
            <StudyDays formik={formik} />
          </StudyCard>
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
              options={data}
              value={formik.values.subject_id
              && data.find((el) => el.id === formik.values.subject_id).id}
              onChange={(e) => formik.setFieldValue('subject_id',
                data.find((el) => el.id === e).id)}
              helperText={formik.errors.subject_id}
              type={formik.touched.subject_id
              && formik.errors.subject_id && 'error'}
              size="large"
            />
            <Dropdown
              placeholder="Teacher"
              options={teachers}
              value={formik.values.teacher_id
              && teachers.find((el) => el.id === formik.values.teacher_id).id}
              onChange={(e) => formik.setFieldValue('teacher_id',
                teachers.find((el) => el.id === e).id)}
              helperText={formik.errors.teacher_id}
              type={formik.touched.teacher_id
                && formik.errors.teacher_id
                && 'error'}
              size="large"
            />
            <NormalInput
              white
              placeholder="Percent for teacher"
              type={formik.errors.salary_percent && 'error'}
              helperText={formik.errors.salary_percent}
              value={formik.values.salary_percent}
              onChange={(e) => formik.setFieldValue('salary_percent', e.target.value)}
              name="salary_percent"
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
              type={formik.touched.price_with_discount
                && formik.errors.price_with_discount
                && 'error'}
              helperText={formik.touched.price_with_discount
                     && formik.errors.price_with_discount
                     && formik.errors.price_with_discount}
              value={formik.values.price_with_discount}
              onChange={(e) => formik.setFieldValue('price_with_discount', e.target.value)}
              name="price_with_discount"
              size="large"
            />
          </Main>
          <Footer>
            <NormalInput
              label="Lesson Duration"
              placeholder="Lesson Duration"
              type={formik.touched.lesson_duration && formik.errors.lesson_duration && 'error'}
              helperText={formik.touched.lesson_duration
                     && formik.errors.lesson_duration && formik.errors.lesson_duration}
              value={formik.values.lesson_duration}
              onChange={(e) => formik.setFieldValue('lesson_duration', e.target.value)}
              name="lesson_duration"
              size="large"
            />
            <SingleDatePicker
              value={start}
              placeholder="Date"
              name="start_date"
              onChange={(value) => { setStart(value); formik.setFieldValue('start_date', value); }}
            />
            <SingleDatePicker
              value={finish}
              placeholder="Date"
              name="finish_date"
              onChange={(value) => { setFinish(value); formik.setFieldValue('finish_date', value); }}
            />
          </Footer>
          <PrimaryButton type="submit" title="Add group" size="large" />
        </Body>
      </Card>
    </Container>
  );
};
