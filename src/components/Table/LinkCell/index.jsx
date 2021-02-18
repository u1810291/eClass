import React from 'react';
import classNames from 'classnames';
import { Container, Content } from './style';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const LinkCell = ({ name }) => (
  <Container>
    <Content>
      <span className={nameClass}>{name}</span>
    </Content>
  </Container>
);

export default LinkCell;
