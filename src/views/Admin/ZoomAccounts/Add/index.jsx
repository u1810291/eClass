import React from 'react';

import { NormalInput } from '../../../../components/Forms/Inputs';
import Dropdown from '../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../components/Buttons';
import { Container, Form } from './style';

export default ({ useAddForm }) => {
  const { formik, users } = useAddForm();
  const personals = [
    { id: 1, value: 'Personal', isPersonal: true },
    { id: 2, value: 'Not Personal', isPersonal: false }];
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Container>
        <NormalInput
          white
          name="email"
          size="large"
          placeholder="Email"
          type={(formik.touched.email && formik.errors.email && 'error') || 'email'}
          helperText={formik.touched.email
                  && formik.errors.email && formik.errors.email}
          value={formik.values.email}
          onChange={(e) => formik.setFieldValue('email', e.target.value)}
        />
        <NormalInput
          white
          name="description"
          size="large"
          placeholder="Description"
          type={formik.touched.description && formik.errors.description && 'error'}
          helperText={formik.touched.description
                  && formik.errors.description && formik.errors.description}
          value={formik.values.description}
          onChange={(e) => formik.setFieldValue('description', e.target.value)}
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Language"
          name="personal"
          type={formik.touched.personal
                && formik.errors.personal && 'error'}
          helperText={formik.errors.personal}
          options={personals}
          value={
            formik.values.personal
                && personals.find((el) => el.value === formik.values.personal).id
          }
          onChange={(e) => formik.setFieldValue('personal', personals.find((el) => el.id === e).value)}
          size="large"
        />
        {
          formik.values.personal
            ? (
              <Dropdown
                color="#FFFFFF"
                placeholder="Language"
                name="reserved_for"
                type={formik.touched.reserved_for
                  && formik.errors.reserved_for && 'error'}
                helperText={formik.errors.reserved_for}
                options={users}
                value={
                  formik.values.reserved_for
                  && users.find((el) => el.value === formik.values.reserved_for).id
                }
                onChange={(e) => formik.setFieldValue('reserved_for', users.find((el) => el.id === e).value)}
                size="large"
              />
            )
            : ''
        }
        <PrimaryButton type="submit" title="Add tariff" size="large" />
      </Container>
    </Form>
  );
};
