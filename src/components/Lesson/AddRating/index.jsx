/* eslint-disable no-console */
import React from 'react';

import { Container } from './style';
import { NormalInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

const AddRating = ({ data, addRating }) => {
  const { formik } = addRating(data.teacher.id, data.group.id);
  return (
    <Container onSubmit={formik.handleSubmit}>
      <NormalInput
        size="medium"
        white
        placeholder="Rating"
        name="stars"
        max="5"
        type={(formik.touched.stars && formik.errors.stars && 'error') || 'number'}
        helperText={formik.touched.stars
              && formik.errors.stars && formik.errors.stars}
        value={formik.values.stars}
        onChange={(e) => formik.setFieldValue('stars', e.target.value)}
      />
      <NormalInput
        size="medium"
        white
        placeholder="Comment"
        name="comment"
        type={formik.touched.comment && formik.errors.comment && 'error'}
        helperText={formik.touched.comment
              && formik.errors.comment && formik.errors.comment}
        value={formik.values.comment}
        onChange={(e) => formik.setFieldValue('comment', e.target.value)}
      />
      <PrimaryButton title="Vote" size="medium" type="submit" />
    </Container>
  );
};

export default AddRating;
