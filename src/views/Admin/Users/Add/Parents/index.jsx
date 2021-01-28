import React from 'react';
import { NormalInput, TextArea, TagsInput } from '../../../../../components/Forms/Inputs';
import { Container, Body } from './style';
import { MainInfo } from '../style';

export default ({ formik }) => (
  <Container>
    <hr />
    <Body>
      <MainInfo>
        <NormalInput
          white
          size="large"
          placeholder="First name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Last name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Middle name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
      </MainInfo>

      <MainInfo.TextArea>
        <TextArea placeholder="Description" white />
      </MainInfo.TextArea>
      <MainInfo.Phone>
        <TagsInput
          white
          placeholder="Phones"
          size="large"
          defaultValue={[]}
          type={formik.touched.phone && formik.errors.phone && 'error'}
          helperText={
            formik.touched.phone && formik.errors.phone && formik.errors.phone
          }
          onChange={(e) => formik.setFieldValue('phone', e)}

        />
        <NormalInput
          white
          size="large"
          placeholder="Description"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
      </MainInfo.Phone>
    </Body>
  </Container>
);
