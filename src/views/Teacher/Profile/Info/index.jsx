import React from 'react';
import classNames from 'classnames';
import {
  Container, Title, Description, ImageWrapper, UserInfo, Text
} from './style';
import { PrimaryButton } from '../../../../components/Buttons';
import { DynamicImage } from '../../../../components/DynamicImage';

const Info = ({ data }) => (
  <Container>
    <Title className={classNames('weight-semibold', 'heading-6')}>Личный кабинет</Title>
    <Description className={classNames('body-large', 'weight-light')}>
      {data.description}
    </Description>
    <UserInfo>
      <ImageWrapper>
        <DynamicImage
          imgSrc=""
          name={`${data.first_name} ${data.last_name} ${data.middle_name}`}
        />
      </ImageWrapper>
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
    <PrimaryButton type="submit" title="Edit" size="medium" />

  </Container>
);

export default Info;
