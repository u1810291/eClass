/* eslint-disable no-console */
import React from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../components/Card';
import { NormalInput, TagsInput } from '../../../../components/Forms/Inputs';

const Form = ({
  formik, title, idx
}) => (
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
              name="full_name"
              value={formik.values.parents[idx].first_name}
              onChange={(e) => formik.setFieldValue(`parents[${idx}].first_name`, e.target.value)}
            />
            <NormalInput
              size="medium"
              white
              placeholder="Last name"
              name="full_name"
              value={formik.values.parents[idx].last_name}
              onChange={(e) => formik.setFieldValue(`parents[${idx}].last_name`, e.target.value)}
            />
          </InputsContainer.Head>
          <InputsContainer.Body>
            <TagsInput
              white
              name="phones"
              value={formik.values.parents[idx].phones
                && [formik.values.parents[idx].phones.map((el) => el.phone)]}
              defaultValue={formik.values.parents[idx].phones
                && [formik.values.parents[idx].phones.map((el) => el.phone)]}
              onChange={(e) => formik.setFieldValue(`parents[${idx}].phones`, e)}
            />
          </InputsContainer.Body>
        </InputsContainer>
      </Card>
    </Forms>
  </Container>
);
export default Form;
