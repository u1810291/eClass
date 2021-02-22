/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Dropdown from '../../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../../components/Buttons';
import { dropdownOptions, languages } from '../../../../../data/dropdown';
import {
  Container, MainInfo, SubmitForm, Body
} from './style';
import { NormalInput, TagsInput, SingleDatePicker } from '../../../../../components/Forms/Inputs';
import TextArea from '../../../../../components/Forms/Inputs/TextArea';
import { getDropdowns } from '../../../../../hooks';

import { useInfoForm } from './hooks';

export default () => {
  const [date, setDate] = useState('');
  const { formik } = useInfoForm();
  getDropdowns('city');
  getDropdowns('country');
  getDropdowns('reasons');
  return (
    <>
      <Container>
        <SubmitForm onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
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
              options={dropdownOptions.commonOptions}
              value={formik.values.country}
              onChange={(e) => formik.setFieldValue('country', e)}
              size="large"
            />
            <Dropdown
              color="#FFFFFF"
              placeholder="City"
              name="city_name"
              options={dropdownOptions.commonOptions}
              value={formik.values.city_name}
              onChange={(e) => formik.setFieldValue('city_name', e)}
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
              defaultValue={formik.values.phone}
              type={formik.touched.phone && formik.errors.phone && 'error'}
              helperText={formik.touched.phone
                && formik.errors.phone && formik.errors.phone}
              onChange={(e) => formik.setFieldValue('phone', [e])}
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
            <MainInfo.TextArea>
              <TextArea placeholder="Description" white />
            </MainInfo.TextArea>
            <MainInfo.Phone>
              <TagsInput
                white
                placeholder="Phones"
                size="large"
                defaultValue={formik.values.parent_phone}
                type={formik.touched.parent_phone && formik.errors.parent_phone && 'error'}
                helperText={formik.touched.parent_phone
                      && formik.errors.parent_phone && formik.errors.parent_phone}
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
      </Container>
    </>
  );
};
