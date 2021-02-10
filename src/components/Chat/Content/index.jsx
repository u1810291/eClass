/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Container, ContentWrapper, Messages, InputWrapper, MessageCard
} from './style';
import Navbar from '../Navbar';
import { NormalInput, UploadInput } from '../../Forms/Inputs';
import { DynamicImage } from '../../DynamicImage';

export default () => (
  <Container>
    <Navbar />
    <ContentWrapper>
      <Messages>
        {[...Array(30)].map((_, i) => (
          <MessageCard key={i}>
            {i}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </MessageCard>
        ))}
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
