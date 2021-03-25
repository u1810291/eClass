import React from 'react';

import { Container } from './style';
import { PrimaryButton } from '../../Buttons';
import Dropdown from '../../Forms/Dropdowns';
import { NormalInput } from '../../Forms/Inputs';

const CancelLesson = ({
  id, cancelingLesson
}) => {
  const {
    reasons, formik
  } = cancelingLesson(id);
  return (
    <Container onSubmit={formik.handleSubmit}>
      Are you sure to cancel this lesson?
      <NormalInput
        placeholder="Comment"
        white
        name="comment"
        size="large"
        type={formik.touched.comment && formik.errors.comment && 'error'}
        helperText={formik.touched.comment
        && formik.errors.comment && formik.errors.comment}
        value={formik.values.comment}
        onChange={(e) => formik.setFieldValue('comment', e.target.value)}

      />
      <Dropdown
        placeholder="Reasons"
        options={reasons}
        type={formik.touched.reason
            && formik.errors.reason && 'error'}
        helperText={formik.errors.reason}
        value={
          formik.values.reason
        }
        onChange={(e) => formik.setFieldValue('reason', e)}
        size="large"
        name="reason"
      />
      <PrimaryButton title="delete" color="" type="submit" />
    </Container>
  );
};
export default CancelLesson;
