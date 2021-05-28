/* eslint-disable no-console */
import React, { useRef } from 'react';
import classNames from 'classnames';

import {
  Text,
  Title,
  UserInfo,
  Container,
  InputEement,
  Description,
  ImageWrapper,
  FileInputCustom
} from './style';

import { DynamicImage } from '../../../../components/DynamicImage';

const Info = ({ data, setFieldValue }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.click();
  };
  const handleChange = (event) => {
    setFieldValue(event.target.files[0]);
  };
  return (
    <Container>
      <Title className={classNames('weight-semibold', 'heading-6')}>Личный кабинет</Title>
      <Description className={classNames('body-large', 'weight-light')}>
        {data.description}
      </Description>
      <UserInfo>
        <UserInfo.Left>
          <ImageWrapper type="button" onClick={handleClick}>
            <FileInputCustom>
              <DynamicImage
                imgSrc={`${data.photo_url}.png`}
                name={`${data.first_name} ${data.last_name} ${data.middle_name}`}
              />
            </FileInputCustom>
            <InputEement type="file" ref={ref} onChange={handleChange} />
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
      </UserInfo>
    </Container>
  );
};
export default Info;
