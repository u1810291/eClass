/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  UserDetails, Container, Content, SubmitForm
} from './style';
import Form from './Form';
import Info from './Info';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';
import { useEditForm } from './helper';
import { PrimaryButton } from '../../../components/Buttons';
import { uploadPhoto } from '../../../redux/modules/teacher/profile/actions';

export default () => {
  const dispatch = useDispatch();
  const [value, setFieldValue] = useState();
  const {
    formik, data, loading, error
  } = useEditForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', value);
    formData.append('desc', 'Моё фото');
    dispatch(uploadPhoto(formData));
  };

  return (
    <Container>
      {loading
        ? <Spinner contain black /> : (
          error
            ? <Error /> : (
              <SubmitForm onSubmit={() => { formik.handleSubmit(); handleSubmit(); }}>
                <UserDetails>
                  <Info data={data} setFieldValue={setFieldValue} />
                </UserDetails>
                <Content>
                  <Form
                    title="Профиль"
                    formik={formik}
                    data={data}
                  />
                </Content>
                <PrimaryButton type="submit" title="Save" size="medium" />

              </SubmitForm>
            )
        )}
    </Container>
  );
};
