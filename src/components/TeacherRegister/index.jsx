import React, { useState } from 'react';

import Dropdown from '../Forms/Dropdowns';
import { PrimaryButton } from '../Buttons';
import { dropdownOptions } from '../../data/dropdown';
import {
  Container, MainInfo, SubmitForm, TextAreaContainer
} from './style';
import { NormalInput, TagsInput } from '../Forms/Inputs';
import TextArea from '../Forms/Inputs/TextArea';
import DatePicker from '../Forms/Inputs/DatePicker';

export default ({ formik }) => {
  const [commonDropdown, setCommonDropdown] = useState(undefined);

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
          <TextAreaContainer>
            <TextArea placeholder="Description" white />
          </TextAreaContainer>
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
          </MainInfo.Body>
          <MainInfo.Phone>
            <TagsInput
              white
              placeholder="Phones"
              size="large"
              name="phones"
              defaultValue={formik.values.phones}
              type={formik.touched.phones && formik.errors.phones && 'error'}
              helperText={formik.touched.phones
                && formik.errors.phones && formik.errors.phones}
              onChange={(e) => formik.setFieldValue('phones', e)}
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
              options={dropdownOptions.commonOptions}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="large"
            />
          </MainInfo.Phone>

          <PrimaryButton title="Sign in" type="submit" size="medium" />
        </SubmitForm>
      </Container>
    </>
  );
};
