/* eslint-disable no-console */
import React from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../components/Card';
import { NormalInput } from '../../../../components/Forms/Inputs';

const Form = ({ formik, data, title }) => {
  const type = `${data.description.charAt(0).toUpperCase()}${data.description.substring(1)}`;
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
                placeholder={`${type} name`}
                name="first_name"
                type={formik.touched.first_name && formik.errors.first_name && 'error'}
                helperText={formik.touched.first_name
                  && formik.errors.first_name && formik.errors.first_name}
                value={formik.values.first_name || data.full_name}
                onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
              />
              <NormalInput
                size="medium"
                white
                placeholder={`${type} name`}
                name="last_name"
                type={formik.touched.last_name && formik.errors.last_name && 'error'}
                helperText={formik.touched.last_name
                    && formik.errors.last_name && formik.errors.last_name}
                value={formik.values.last_name || data.full_name}
                onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
              />
            </InputsContainer.Head>
            <InputsContainer.Body>
              <NormalInput
                size="medium"
                white
                name="phone_code"
                type={formik.touched.phone_code && formik.errors.phone_code && 'error'}
                helperText={formik.touched.phone_code
                    && formik.errors.phone_code && formik.errors.phone_code}
                value={formik.values.phone_code || data.phones[0].phone.substring(0, 3)}
                onChange={(e) => formik.setFieldValue('phone_code', e.target.value)}
                placeholder="+998"
              />
              <NormalInput
                size="medium"
                white
                name="phone_code"
                type={formik.touched.phone_code && formik.errors.phone_code && 'error'}
                helperText={formik.touched.phone_code
                    && formik.errors.phone_code && formik.errors.phone_code}
                value={formik.values.phone_code || data.phones[0].phone}
                onChange={(e) => formik.setFieldValue('phone_code', e.target.value)}
                placeholder={`Номер телефона ${type}`}
              />
            </InputsContainer.Body>
            <InputsContainer.Footer>
              <NormalInput size="medium" white placeholder="Mail Address" />
              <NormalInput size="medium" white placeholder="Дата рождения" />
              {title !== 'Parent' ? (
                <NormalInput size="medium" white placeholder="Школа N или где сейчас учится" />
              ) : (
                ''
              )}
            </InputsContainer.Footer>
          </InputsContainer>
        </Card>
      </Forms>
    </Container>
  );
};
export default Form;
