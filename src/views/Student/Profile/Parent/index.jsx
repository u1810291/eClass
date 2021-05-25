/* eslint-disable no-console */
import React, { useState } from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../components/Card';
import { NormalInput, TagsInput } from '../../../../components/Forms/Inputs';

const Form = ({ formik, data, title }) => {
  const [fullname, setFullname] = useState(data.full_name);
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
                name="full_name"
                value={data.full_name}
                onChange={(e) => setFullname((prev) => prev.concat(' ', e.target.value))}
              />
              <NormalInput
                size="medium"
                white
                placeholder="Last name"
                name="full_name"
                value={data.full_name}
                onChange={(e) => setFullname((prev) => prev.concat(fullname, ' ', e.target.value))}
              />
            </InputsContainer.Head>
            <InputsContainer.Body>
              <TagsInput
                white
                placeholder="Phones"
                size="medium"
                name="phones"
                value={[data.phones.map((el) => el.phone)]}
                defaultValue={[data.phones.map((el) => el.phone)]}
                onChange={(e) => formik.setFieldValue('phone', e)}
              />
            </InputsContainer.Body>
          </InputsContainer>
        </Card>
      </Forms>
    </Container>
  );
};
export default Form;
