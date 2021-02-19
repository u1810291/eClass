import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');

const LinkCell = ({ join }) => (
  <Container>
    <Content className={nameClass}>
      {join
        ? (
          <Link to={join}>
            <PrimaryButton title="Join meeting" />
          </Link>
        )
        : <Empty>Not started</Empty>}
    </Content>
  </Container>
);

export default LinkCell;
