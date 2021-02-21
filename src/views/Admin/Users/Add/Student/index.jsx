/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Dropdown from '../../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../../components/Buttons';
import { dropdownOptions } from '../../../../../data/dropdown';
import {
  Container, MainInfo, SubmitForm, Body
} from './style';
import { NormalInput, TagsInput } from '../../../../../components/Forms/Inputs';
import TextArea from '../../../../../components/Forms/Inputs/TextArea';
import DatePicker from '../../../../../components/Forms/Inputs/DatePicker';
import { useInfoForm } from './hooks';

export default () => {
  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const getPath = window.location.pathname.split('/');
  const { formik } = useInfoForm();

  return (
    <>
      <Container>
        <SubmitForm onSubmit={formik.handleSubmit}>
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
            <TextArea placeholder="Description" white />
          </MainInfo.TextArea>
          <MainInfo.Body>
            <DatePicker
              placeholder="Date of birth"
              white
              size="large"
              name="date_of_birth"
              value={formik.values.date_of_birth}
              change={(value) => formik.setFieldValue('date_of_birth', value)}
              showTimePicker={false}
              dateFormat="YYYY-MM-DD"
              date={formik.values.date_of_birth}
            />
            <Dropdown
              color="#FFFFFF"
              placeholder="Language"
              name="lang"
              options={dropdownOptions.commonOptions}
              value={formik.values.lang}
              onChange={(e) => formik.setFieldValue('lang', e)}
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
              name="city"
              options={dropdownOptions.commonOptions}
              value={formik.values.city}
              onChange={(e) => formik.setFieldValue('city', e)}
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
                && formik.errors.school_number && formik.errors.school_number}
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
                && formik.errors.phone_description && formik.errors.phone_description}
              value={formik.values.phone_description}
              onChange={(e) => formik.setFieldValue('phone_description', e.target.value)}
            />
            {getPath[getPath.length - 1] === 'teacher'
              ? (
                <>
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
                    options={dropdownOptions.commonOptions}
                    value={commonDropdown}
                    onChange={setCommonDropdown}
                    size="large"
                  />
                </>
              )
              : null}
          </MainInfo.Phone>
          {getPath[getPath.length - 1] === 'student'
            ? (
              <Body>
                <MainInfo>
                  <NormalInput
                    white
                    size="large"
                    placeholder="First name"
                    name="parent_full_name"
                    type={
                      formik.touched.parent_full_name
                      && formik.errors.parent_full_name && 'error'
                    }
                    helperText={formik.touched.parent_full_name
                      && formik.errors.parent_full_name && formik.errors.parent_full_name}
                    value={formik.values.parent_full_name}
                    onChange={(e) => formik.setFieldValue('parent_full_name', e.target.value)}
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
                    onChange={(e) => formik.setFieldValue('parent_phone', e)}
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
            ) : null}
          <PrimaryButton title="Sign in" type="submit" size="medium" />
        </SubmitForm>
      </Container>
    </>
  );
};
