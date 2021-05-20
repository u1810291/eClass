/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  UserDetails, Container, Content, SubmitForm
} from './style';
import Form from './Form';
import Info from './Info';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';
import { useEditForm } from './helper';

export default () => {
  const {
    formik, data, loading, error
  } = useEditForm();
  return (
    <Container>
      {loading
        ? <Spinner contain black /> : (
          error
            ? <Error /> : (
              <SubmitForm>
                <UserDetails>
                  <Info data={data} />
                </UserDetails>
                <Content onSubmit={formik.handleSubmit}>
                  <Form
                    title="Профиль"
                    formik={formik}
                    data={data}
                  />
                </Content>
              </SubmitForm>
            )
        )}
    </Container>
  );
};
