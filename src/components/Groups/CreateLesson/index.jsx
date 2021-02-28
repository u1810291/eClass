import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container, Title, Body } from './style';
import { CustomDatePickerV2 } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

const CreateLesson = ({ handleCreate, title }) => {
  const { formik } = handleCreate();
  const [date, setDate] = useState('');
  return (
    <Container>
      <Title className={classNames('heading-3')}>{title}</Title>
      <Body onSubmit={formik.handleSubmit}>
        <CustomDatePickerV2
          name="start_date"
          placeholder="Start Date"
          value={date}
          type={formik.touched.date_of_birth
            && formik.errors.date_of_birth && 'error'}
          size="large"
          helperText={formik.errors.date_of_birth}
          onChange={(e) => {
            setDate(e);
            formik.setFieldValue('start_date', e);
          }}
        />
        <PrimaryButton size="large" type="submit" title="Submit" />
      </Body>
    </Container>
  );
};

CreateLesson.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  handleCreate: PropTypes.func.isRequired
};

export default CreateLesson;
