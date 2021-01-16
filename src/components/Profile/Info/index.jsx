import React from 'react';
import classNames from 'classnames';
import {
  Container, Title, Description, ImageWrapper, UserInfo, Text
} from './style';
import Avatar from '../../../assets/images/avatar-2.jpg';

export default () => (
  <Container>
    <Title className={classNames('weight-semibold', 'heading-6')}>Личный кабинет</Title>
    <Description className={classNames('body-large', 'weight-light')}>
      This information can be edited from your profile page.
    </Description>
    <UserInfo>
      <ImageWrapper src={Avatar} />
      <Text>
        <Text.Name>Isaac Williams</Text.Name>
        <Text.Email>kinanthayani@mail.com</Text.Email>
      </Text>
    </UserInfo>
  </Container>
);
