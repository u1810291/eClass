import React from 'react';
import classNames from 'classnames';
import { Container, Content } from './style';
import { DynamicImage } from '../../FormElements/DynamicImage';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const roleClass = classNames('caption', 'weight-regular', 'text-black-400');

const UserCell = ({ name, role, image }) => (
  <Container>
    <DynamicImage width="38" height="38" name={name} imgSrc={image} />
    <Content>
      <span className={nameClass}>{name}</span>
      <span className={roleClass}>{role}</span>
    </Content>
  </Container>
);

export default UserCell;
