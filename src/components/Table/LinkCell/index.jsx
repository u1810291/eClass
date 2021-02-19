import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Content } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const LinkCell = ({ join }) => (
  <Container>
    <Content className={nameClass}>
      <Link to={join || '/'}>
        <PrimaryButton title="Join meeting" />
      </Link>
    </Content>
  </Container>
);

export default LinkCell;
