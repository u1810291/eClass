import React, { useState } from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../components/Card';
import { NormalInput, TagsInput, CustomDatePickerV2 } from '../../../../components/Forms/Inputs';

const Form = ({ formik, title }) => {
  const [date, setDate] = useState();
  return (
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
                value={formik.values.phones}
                defaultValue={formik.values.phones || []}
                type={formik.touched.phones
                && (formik.touched.phones.length === 0 || formik.errors.phones)
                  ? 'error'
                  : ''}
                helperText={formik.touched.phones
                  && (formik.touched.phones.length === 0 || formik.errors.phones)
                  ? formik.errors.phone || 'Phone number is required'
                  : ''}
                // eslint-disable-next-line no-unused-expressions
                onChange={(e) => formik.setFieldValue('phones', e)}
              />
            </InputsContainer.Body>
            <InputsContainer.Footer>
              <NormalInput
                size="medium"
                white
                placeholder="Mail Address"
                name="email"
                type={formik.touched.email && formik.errors.email && 'error'}
                helperText={formik.touched.email
                  && formik.errors.email && formik.errors.email}
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
              />
              <CustomDatePickerV2
                name="date_of_birth"
                value={date}
                // placeholder={formik.values.date_of_birth}
                type={formik.touched.date_of_birth
                  && formik.errors.date_of_birth && 'error'}
                size="large"
                placeholder="1999-12-12"
                onChange={(value) => {
                  setDate(value);
                  formik.setFieldValue('date_of_birth', value);
                }}
              />
            </InputsContainer.Footer>
          </InputsContainer>
        </Card>
      </Forms>
    </Container>
  );
};
export default Form;
