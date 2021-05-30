/* eslint-disable no-nested-ternary */
import React from 'react';
import { isEmpty } from 'lodash';
import {
  UserDetails, Container, Content, SubmitForm
} from './style';
import Form from './Form';
import Parent from './Parent';
import Info from './Info';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';
import { useEditForm } from './helper';
import { PrimaryButton } from '../../../components/Buttons';

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
                  {formik.values.parents && formik.values.parents.map((el, i) => (
                    <Parent
                      key={el.id}
                      idx={i}
                      title="Parent"
                      formik={formik}
                      data={el}
                    />
                  ))}
                </Content>
                {console.log(formik.errors)}
                <PrimaryButton type="submit" size="medium" title="Save" />
              </SubmitForm>
            )
        )}
    </Container>
  );
};
