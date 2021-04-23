/* eslint-disable no-nested-ternary */
import React from 'react';
import { isEmpty } from 'lodash';
import {
  UserDetails, Container, Content, Area, Text, SubmitForm
} from './style';
import Form from './Form';
import Info from './Info';
import { TextArea } from '../../../components/Forms/Inputs';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';
import { useEditForm } from './helper';

export default () => {
  const {
    formik, data, loading, error
  } = useEditForm();
  return (
    <Container>
      {loading && !isEmpty(data)
        ? <Spinner contain black /> : (
          error
            ? <Error /> : (
              <SubmitForm onSubmit={formik.handleSubmit}>
                <UserDetails>
                  <Info data={data} />
                </UserDetails>
                <Content>
                  <Form
                    title="Student"
                    formik={formik}
                    data={data}
                  />
                  {data.parents && data.parents.map((el) => (
                    <Form
                      key={el.id}
                      title="Parent"
                      formik={formik}
                      data={el}
                    />
                  ))}
                </Content>
                <Text>Дополнительная информация</Text>
                <Area>
                  <TextArea white />
                </Area>
              </SubmitForm>
            )
        )}
    </Container>
  );
};
