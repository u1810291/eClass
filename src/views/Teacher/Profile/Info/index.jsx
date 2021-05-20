/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { uploadPhoto } from '../../../../redux/modules/teacher/profile/actions';
import { PrimaryButton } from '../../../../components/Buttons';
import { DynamicImage } from '../../../../components/DynamicImage';

const Info = ({ data }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [value, setFieldValue] = useState();
  const handleClick = () => {
    ref.current.click();
  };
  const handleChange = (event) => {
    setFieldValue(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', value);
    formData.append('desc', 'Моё фото');
    dispatch(uploadPhoto(formData));
  };
  return (
    <Container onSubmit={handleSubmit}>
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
        <PrimaryButton type="submit" title="Save" size="small" />
      </UserInfo>
    </Container>
  );
};
export default Info;
