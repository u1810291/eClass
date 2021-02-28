import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container, Title, Body } from './style';
import { NormalInput, SingleDatePicker } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

const AddHomework = ({ formik }) => (
  <Container>
    <Title className={classNames('heading-3')}>Add homework</Title>
    <Body onSubmit={formik.handleSubmit}>
      <NormalInput
        white
        size="large"
        placeholder="Description..."
        value={formik.values.desc}
        onChange={(e) => formik.setFieldValue('desc', e.target.value)}
      />
      <SingleDatePicker
        name="from_date"
        placeholder="From"
        value={formik.values.from_date}
        onChange={(e) => formik.setFieldValue('from_date', e)}
        size="large"
        type={
          formik.touched.from_date
          && formik.errors.from_date && 'error'
        }
        helperText={
          formik.errors.from_date
          && formik.errors.from_date
        }
      />
      <SingleDatePicker
        name="till_date"
        placeholder="Till date"
        value={formik.values.till_date}
        onChange={(e) => formik.setFieldValue('till_date', e)}
        size="large"
        type={
          formik.touched.till_date
          && formik.errors.till_date && 'error'
        }
        helperText={
          formik.errors.till_date
          && formik.errors.till_date
        }
      />
      <PrimaryButton size="large" type="submit" />
    </Body>
  </Container>
);

AddHomework.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.any.isRequired
};

export default AddHomework;
