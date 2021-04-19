/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  UserDetails, Container, Content, Area, Text
} from './style';
import Form from './Form';
import Info from './Info';
import { TextArea } from '../../../../components/Forms/Inputs';
import Spinner from '../../../../components/Spinner';
import Error from '../../../../components/Error';

export default ({ data, loading, error }) => (
  <Container>
    {loading
      ? (
        error
          ? (
            <>
              <UserDetails>
                <Info data={data} />
              </UserDetails>
              <Content>
                <Form title="Student" />
                <Form title="Parent" />
              </Content>
              <Text>Дополнительная информация</Text>
              <Area>
                <TextArea white />
              </Area>
            </>
          )
          : <Error />
      )
      : <Spinner contain black />}
  </Container>
);
