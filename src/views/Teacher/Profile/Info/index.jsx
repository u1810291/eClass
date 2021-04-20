import React from 'react';
import classNames from 'classnames';
import {
  Container, Title, Description, ImageWrapper, UserInfo, Text
} from './style';
import Avatar from '../../../../assets/images/avatar-2.jpg';

const Info = ({ data }) => (
  <Container>
    <Title className={classNames('weight-semibold', 'heading-6')}>Личный кабинет</Title>
    <Description className={classNames('body-large', 'weight-light')}>
      {data.description}
    </Description>
    <UserInfo>
      <ImageWrapper src={Avatar} />
      <Text>
        <Text.Name>
          {`${data.first_name} ${data.last_name} ${data.middle_name}`}
        </Text.Name>
        <Text.Name>
          {data.date_of_birth}
        </Text.Name>
        <Text.Email>{data.email}</Text.Email>
      </Text>
    </UserInfo>
  </Container>
);

export default Info;
