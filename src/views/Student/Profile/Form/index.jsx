/* eslint-disable no-console */
import React from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../components/Card';
import { NormalInput, TagsInput, CustomDatePickerV2 } from '../../../../components/Forms/Inputs';

const Form = ({ formik, title }) => (
  <Container>
    <Forms>
      <Card bordered>
        {title}
        <InputsContainer>
          <InputsContainer.Head>
            <NormalInput
              size="medium"
              white
              placeholder="First name"
              name="first_name"
              type={formik.touched.first_name && formik.errors.first_name && 'error'}
              helperText={formik.touched.first_name
                  && formik.errors.first_name && formik.errors.first_name}
              value={formik.values.first_name}
              onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
            />
            <NormalInput
              size="medium"
              white
              placeholder="Last name"
              name="last_name"
              type={formik.touched.last_name && formik.errors.last_name && 'error'}
              helperText={formik.touched.last_name
                    && formik.errors.last_name && formik.errors.last_name}
              value={formik.values.last_name}
              onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
            />
          </InputsContainer.Head>
          <InputsContainer.Body>
            <TagsInput
              white
              placeholder="Phones"
              size="medium"
              name="phones"
              value={formik.values.phones && [formik.values.phones.map((el) => el.phone)]}
              defaultValue={(formik.values.phones
                && [formik.values.phones.map((el) => el.phone)]) || []}
              type={formik.touched.phones
                && (formik.touched.phones.length === 0 || formik.errors.phones)
                ? 'error'
                : ''}
              helperText={formik.touched.phones
                  && (formik.touched.phones.length === 0 || formik.errors.phones)
                ? formik.errors.phone || 'Phone number is required'
                : ''}
              onChange={(e) => formik.setFieldValue('phones', e)}
            />
          </InputsContainer.Body>
          <InputsContainer.Footer>
            <NormalInput
              size="medium"
              white
              placeholder="Email address"
              name="email"
              type={formik.touched.email && formik.errors.email && 'error'}
              helperText={formik.touched.email
                    && formik.errors.email && formik.errors.email}
              value={formik.values.email}
              onChange={(e) => formik.setFieldValue('email', e.target.value)}
            />
            <CustomDatePickerV2
              name="date_of_birth"
              placeholder="Date of birth"
              value={formik.values.date_of_birth}
              type={formik.touched.date_of_birth
                    && formik.errors.date_of_birth && 'error'}
              size="large"
              helperText={formik.errors.date_of_birth}
              onChange={(value) => {
                formik.setFieldValue('date_of_birth', value);
              }}
            />
            <NormalInput
              size="medium"
              white
              placeholder="Школа N или где сейчас учится"
              name="school_number"
              value={formik.values.school_number}
              type={formik.touched.school_number
                      && formik.errors.school_number && 'error'}
              helperText={formik.errors.school_number}
              onChange={(value) => {
                formik.setFieldValue('school_number', value);
              }}
            />
            <NormalInput
              size="medium"
              white
              placeholder="Адрес"
              name="address"
              value={formik.values.address}
              type={formik.touched.address
                      && formik.errors.address && 'error'}
              helperText={formik.errors.address}
              onChange={(value) => {
                formik.setFieldValue('address', value);
              }}
            />
          </InputsContainer.Footer>
        </InputsContainer>
      </Card>
    </Forms>
  </Container>
);
export default Form;
