import React from 'react';
import classNames from 'classnames';
import { Container } from './style';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const DownloadCell = () => (
  <Container className={nameClass}> </Container>
);

export default DownloadCell;
