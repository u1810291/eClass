import React from 'react';
import classNames from 'classnames';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const UploadCell = () => (
  <Container className={nameClass}>
    <PrimaryButton size="large" title="Upload" />
  </Container>
);

export default UploadCell;
