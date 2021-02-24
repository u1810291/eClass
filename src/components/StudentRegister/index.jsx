import React from 'react';

import { MainInfo, SubmitForm, Body } from './style';

import Dropdown from '../Forms/Dropdowns';
import { PrimaryButton } from '../Buttons';
import { languages } from '../../data/dropdown';
import { NormalInput, TagsInput, SingleDatePicker } from '../Forms/Inputs';
import TextArea from '../Forms/Inputs/TextArea';
import { GeneralInfo } from './GeneralInfo';

export default ({
  formik, countries, date, setDate, cities
}) => (
  <SubmitForm onSubmit={(e) => {
    e.preventDefault();
    formik.handleSubmit();
  }}
  >
    <GeneralInfo formik={formik} />
    <MainInfo.TextArea>
      <TextArea
        white
        placeholder="Description"
        type={formik.touched.comment_description
                && formik.errors.comment_description && 'error'}
        helperText={formik.touched.comment_description
                && formik.errors.comment_description
                && formik.errors.comment_description}
        value={formik.values.comment_description}
        name="comment_description"
        onChange={(e) => formik.setFieldValue('comment_description', e.target.value)}
      />
    </MainInfo.TextArea>
    <MainInfo.Body>
      <SingleDatePicker
        placeholder="From"
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
      <NormalInput
        white
        size="large"
        placeholder="Address"
        name="address"
        type={formik.touched.address && formik.errors.address && 'error'}
        helperText={formik.touched.address
                && formik.errors.address && formik.errors.address}
        value={formik.values.address}
        onChange={(e) => formik.setFieldValue('address', e.target.value)}
      />
      <NormalInput
        white
        size="large"
        placeholder="School number"
        name="school_number"
        type={formik.touched.school_number && formik.errors.school_number && 'error'}
        helperText={formik.touched.school_number
                && formik.errors.school_number
                && formik.errors.school_number}
        value={formik.values.school_number}
        onChange={(e) => formik.setFieldValue('school_number', e.target.value)}
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
        placeholder="Description"
        name="phone_description"
        type={formik.touched.phone_description
              && formik.errors.phone_description && 'error'}
        helperText={formik.touched.phone_description
                && formik.errors.phone_description
                && formik.errors.phone_description}
        value={formik.values.phone_description}
        onChange={(e) => formik.setFieldValue('phone_description', e.target.value)}
      />
    </MainInfo.Phone>
    <Body>
      <MainInfo>
        <NormalInput
          white
          size="large"
          placeholder="First name"
          name="parent_first_name"
          type={
            formik.touched.parent_first_name
                      && formik.errors.parent_first_name && 'error'
          }
          helperText={formik.touched.parent_first_name
                      && formik.errors.parent_first_name
                      && formik.errors.parent_first_name}
          value={formik.values.parent_first_name}
          onChange={(e) => formik.setFieldValue('parent_first_name', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="First name"
          name="parent_last_name"
          type={
            formik.touched.parent_last_name
                      && formik.errors.parent_last_name && 'error'
          }
          helperText={formik.touched.parent_last_name
                      && formik.errors.parent_last_name
                      && formik.errors.parent_last_name}
          value={formik.values.parent_last_name}
          onChange={(e) => formik.setFieldValue('parent_last_name', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="First name"
          name="parent_middle_name"
          type={
            formik.touched.parent_middle_name
                      && formik.errors.parent_middle_name && 'error'
          }
          helperText={formik.touched.parent_middle_name
                      && formik.errors.parent_middle_name
                      && formik.errors.parent_middle_name}
          value={formik.values.parent_middle_name}
          onChange={(e) => formik.setFieldValue('parent_middle_name', e.target.value)}
        />
      </MainInfo>
      <MainInfo.Phone>
        <TagsInput
          white
          placeholder="Phones"
          size="large"
          defaultValue={formik.values.parent_phone}
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
          onChange={(e) => formik.setFieldValue('parent_phone', [e])}
        />
        <NormalInput
          white
          size="large"
          placeholder="Description"
          type={formik.touched.parent_phone_description
                    && formik.errors.parent_phone_description && 'error'}
          helperText={formik.touched.parent_phone_description
                      && formik.errors.parent_phone_description
                      && formik.errors.parent_phone_description}
          value={formik.values.parent_phone_description}
          onChange={(e) => formik.setFieldValue('parent_phone_description', e.target.value)}
        />
      </MainInfo.Phone>
    </Body>
    <MainInfo.TextArea>
      <TextArea
        white
        placeholder="Description"
        type={formik.touched.parent_description
                && formik.errors.parent_description && 'error'}
        helperText={formik.touched.parent_description
                && formik.errors.parent_description
                && formik.errors.parent_description}
        value={formik.values.parent_description}
        name="parent_description"
        onChange={(e) => formik.setFieldValue('parent_description', e.target.value)}
      />
    </MainInfo.TextArea>
    <PrimaryButton title="Create Student" type="submit" size="medium" />
  </SubmitForm>
);
