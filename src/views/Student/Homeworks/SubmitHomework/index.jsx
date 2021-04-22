import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container, Title, Body } from './style';
import { NormalInput } from '../../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../../components/Buttons';

const AddHomework = ({ handleAdd, title }) => {
  const { formik } = handleAdd();
  return (
    <Container>
      <Title className={classNames('heading-3')}>{title}</Title>
      <Body onSubmit={formik.handleSubmit}>
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
