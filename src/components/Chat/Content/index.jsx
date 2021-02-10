import React from 'react';
import {
  Container, ContentWrapper, Messages, InputWrapper
} from './style';
import Navbar from '../Navbar';
import { NormalInput, UploadInput } from '../../Forms/Inputs';
import { DynamicImage } from '../../DynamicImage';

export default () => (
  <Container>
    <Navbar />
    <ContentWrapper>
      <Messages>
        Message
      </Messages>
      <InputWrapper>
        <InputWrapper.Item>
          <DynamicImage name="Itachi Uchiha" />
        </InputWrapper.Item>
        <NormalInput size="medium" placeholder="Please write something..." white />
        <UploadInput size="medium" white />
      </InputWrapper>
    </ContentWrapper>
  </Container>
);
