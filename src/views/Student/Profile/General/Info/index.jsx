import React from 'react';
import classNames from 'classnames';
import {
  Container, Title, Description, ImageWrapper, UserInfo, Text
} from './style';
import Avatar from '../../../../../assets/images/avatar-2.jpg';

export default ({ data }) => (
  <Container>
    <Title className={classNames('weight-semibold', 'heading-6')}>Личный кабинет</Title>
    <Description className={classNames('body-large', 'weight-light')}>
      This information can be edited from your profile page.
    </Description>
    <UserInfo>
      <ImageWrapper src={Avatar} />
      <Text>
        <Text.Name>
          {`${data.first_name} ${data.last_name} ${data.middle_name}`}
        </Text.Name>
        <Text.Email>kinanthayani@mail.com</Text.Email>
      </Text>
    </UserInfo>
  </Container>
);
