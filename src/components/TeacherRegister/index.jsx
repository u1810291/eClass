import React from 'react';

import classNames from 'classnames';
import Dropdown from '../Forms/Dropdowns';
import { PrimaryButton } from '../Buttons';
import { languages } from '../../data/dropdown';
import {
  Container, MainInfo, SubmitForm, TextAreaContainer, Header
} from './style';
import { NormalInput, TagsInput, CustomDatePickerV2 } from '../Forms/Inputs';
import TextArea from '../Forms/Inputs/TextArea';

export default ({
  formik, cities, countries, date, setDate, subjects
}) => (
  <Container>
    <Header className={classNames('heading-1')}>Create new Teacher</Header>
    <SubmitForm onSubmit={(e) => {
      e.preventDefault();
      formik.handleSubmit(e);
    }}
    >
      <MainInfo>
        <NormalInput
          white
          name="first_name"
          size="large"
          placeholder="First name"
          type={formik.touched.first_name && formik.errors.first_name && 'error'}
          helperText={formik.touched.first_name
                && formik.errors.first_name && formik.errors.first_name}
          value={formik.values.first_name}
          onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Last name"
          type={formik.touched.last_name && formik.errors.last_name && 'error'}
          helperText={formik.touched.last_name
                && formik.errors.last_name && formik.errors.last_name}
          value={formik.values.last_name}
          name="last_name"
          onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Middle name"
          type={formik.touched.middle_name && formik.errors.middle_name && 'error'}
          helperText={formik.touched.middle_name
                && formik.errors.middle_name && formik.errors.middle_name}
          value={formik.values.middle_name}
          name="middle_name"
          onChange={(e) => formik.setFieldValue('middle_name', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Username"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username
                && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          name="username"
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />

        <NormalInput
          white
          size="large"
          placeholder="Password"
          type={formik.touched.password && formik.errors.password && 'error'}
          helperText={formik.touched.password
                && formik.errors.password && formik.errors.password}
          value={formik.values.password}
          name="password"
          onChange={(e) => formik.setFieldValue('password', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Email"
          type={formik.touched.email && formik.errors.email && 'error'}
          helperText={formik.touched.email
                && formik.errors.email && formik.errors.email}
          value={formik.values.email}
          name="email"
          onChange={(e) => formik.setFieldValue('email', e.target.value)}
        />
      </MainInfo>
      <TextAreaContainer>
        <TextArea
          white
          placeholder="Description"
          type={formik.touched.description
          && formik.errors.description && 'error'}
          helperText={formik.touched.description
          && formik.errors.description
          && formik.errors.description}
          value={formik.values.description}
          name="description"
          onChange={(e) => formik.setFieldValue('description', e.target.value)}
        />
      </TextAreaContainer>
      <MainInfo.Body>
        <CustomDatePickerV2
          name="date_of_birth"
          value={date}
          type={formik.touched.date_of_birth
                && formik.errors.date_of_birth && 'error'}
          size="large"
          helperText={formik.errors.date_of_birth}
          onChange={(value) => {
            setDate(value);
            formik.setFieldValue('date_of_birth', value);
          }}
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Language"
          name="lang"
          options={languages}
          type={formik.touched.lang
                && formik.errors.lang && 'error'}
          helperText={formik.errors.lang}
          value={
            formik.values.lang
                      && languages.find((el) => el.value === formik.values.lang).id
          }
          onChange={(e) => formik.setFieldValue('lang', languages.find((el) => el.id === e).value)}
          size="large"
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Country"
          name="country"
          options={countries}
          type={formik.touched.country
                && formik.errors.country && 'error'}
          helperText={formik.errors.country}
          value={formik.values.country
                && countries.find((el) => el.value === formik.values.country).id}
          onChange={(e) => formik.setFieldValue('country', countries.find((el) => el.id === e).value)}
          size="large"
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="City"
          name="city_name"
          options={cities}
          type={formik.touched.city_name
                && formik.errors.city_name && 'error'}
          helperText={formik.errors.city_name}
          value={formik.values.city_name
                && cities.find((el) => el.value === formik.values.city_name).id}
          onChange={(e) => formik.setFieldValue('city_name', cities.find((el) => el.id === e).value)}
          size="large"
        />
      </MainInfo.Body>
      <MainInfo.Phone>
        <TagsInput
          white
          placeholder="Phones"
          size="large"
          name="phone"
          value={formik.values.phone}
          defaultValue={formik.values.phone}
          type={formik.touched.phone
            && (formik.touched.phone.length === 0 || formik.errors.phone)
            ? 'error'
            : ''}
          helperText={
            formik.touched.phone
            && (formik.touched.phone.length === 0 || formik.errors.phone)
              ? formik.errors.phone || 'Phone number is required'
              : ''
          }
          onChange={(e) => formik.setFieldValue('phone', e)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Phone description"
          name="phone_description"
          type={formik.touched.phone_description && formik.errors.phone_description && 'error'}
          helperText={formik.touched.phone_description
                      && formik.errors.phone_description && formik.errors.phone_description}
          value={formik.values.phone_description}
          onChange={(e) => formik.setFieldValue('phone_description', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Specialization"
          name="specialization"
          type={formik.touched.specialization && formik.errors.specialization && 'error'}
          helperText={formik.touched.specialization
                      && formik.errors.specialization && formik.errors.specialization}
          value={formik.values.specialization}
          onChange={(e) => formik.setFieldValue('specialization', e.target.value)}
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Subjects"
          name="subjects"
          type={formik.touched.subjects
                && formik.errors.subjects && 'error'}
          helperText={formik.errors.subjects}
          options={subjects}
          value={formik.values.subjects
            && subjects.find((el) => el.value === formik.values.subjects).id}
          onChange={(e) => formik.setFieldValue('subjects', subjects.find((el) => el.id === e).value)}
          size="large"
        />

      </MainInfo.Phone>
      <PrimaryButton title="Create teacher" type="submit" size="medium" />
    </SubmitForm>
  </Container>
);
