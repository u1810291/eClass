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
      This information can be edited from your profile page.
    </Description>
    <UserInfo>
      <UserInfo.Left>
        <ImageWrapper>
          {data.last_name
          && (
            <DynamicImage
              imgSrc=""
              name={`${data.first_name || 'some'} ${data.last_name || 'name'} ${data.middle_name}`}
            />
          )}
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
      </UserInfo.Left>
      <PrimaryButton type="submit" title="Edit" size="small" />
    </UserInfo>
  </Container>
);

export default Info;
