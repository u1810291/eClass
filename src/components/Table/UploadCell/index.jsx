import React from 'react';
import classNames from 'classnames';
import { Container } from './style';
import { UploadInput } from '../../Forms/Inputs';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const UploadCell = () => (
  <Container className={nameClass}>
    <UploadInput setFieldValue={[]} />
  </Container>
);

export default UploadCell;
