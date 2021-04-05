import React from 'react';
import { Container, Forms, InputsContainer } from './style';
import Card from '../../../../../components/Card';
import { NormalInput } from '../../../../../components/Forms/Inputs';

export default ({ title }) => (
  <Container>
    <Forms>
      <Card bordered>
        {title}
        <InputsContainer>
          <InputsContainer.Head>
            <NormalInput size="medium" white placeholder="Имя Ученика" />
            <NormalInput size="medium" white placeholder="Фамилия" />
          </InputsContainer.Head>
          <InputsContainer.Body>
            <NormalInput size="medium" white placeholder="+998" />
            <NormalInput size="medium" white placeholder="Номер телефона ученика" />
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
