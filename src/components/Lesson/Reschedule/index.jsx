import React from 'react';

import { Container } from './style';
import { PrimaryButton } from '../../Buttons';
import Dropdown from '../../Forms/Dropdowns';
import { NormalInput } from '../../Forms/Inputs';
import SingleDatePicker from '../../Forms/Inputs/SingleDatePicker';

const CancelLesson = ({
  id, rescheduleLesson
}) => {
  const {
    reasons, formik
  } = rescheduleLesson(id);
  return (
    <Container onSubmit={formik.handleSubmit}>
      Are you sure to reschedule this lesson?
      <SingleDatePicker
        value={formik.values.new_date}
        showTimeSelect
        placeholder="Date"
        name="new_date"
        type={formik.touched.new_date && formik.errors.new_date && 'error'}
        helperText={formik.touched.new_date
        && formik.errors.new_date && formik.errors.new_date}
        onChange={(value) => formik.setFieldValue('new_date', value)}
      />
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
      <PrimaryButton title="Save" color="" type="submit" />
    </Container>
  );
};
export default CancelLesson;
