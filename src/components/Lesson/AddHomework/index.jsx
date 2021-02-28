import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container, Title, Body } from './style';
import { NormalInput, SingleDatePicker } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

const AddHomework = ({ handleAdd, title }) => {
  const { formik } = handleAdd();
  return (
    <Container>
      <Title className={classNames('heading-3')}>{title}</Title>
      <Body onSubmit={formik.handleSubmit}>
        <SingleDatePicker
          name="from_date"
          placeholder="From"
          value={formik.values.from_date}
          onChange={(e) => formik.setFieldValue('from_date', e)}
          size="large"
          type={
            formik.touched.till_date && formik.touched.from_date
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
            formik.touched.till_date && formik.errors.till_date
          && formik.errors.till_date
          }
        />
        <NormalInput
          white
          size="large"
          placeholder="Description..."
          value={formik.values.desc}
          onChange={(e) => formik.setFieldValue('desc', e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => formik.setFieldValue('file', [e.target.files[0]])}
        />
        <PrimaryButton size="large" type="submit" title="Submit" />
      </Body>
    </Container>
  );
};

AddHomework.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  handleAdd: PropTypes.func.isRequired
};

export default AddHomework;
