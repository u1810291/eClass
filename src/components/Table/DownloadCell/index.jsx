import React from 'react';
import classNames from 'classnames';
import { Container } from './style';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const DownloadCell = ({ name }) => (
  <Container>
    <span className={nameClass}>{name}</span>
  </Container>
);

export default DownloadCell;
