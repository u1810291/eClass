import React from 'react';
import {
  Container, ContentWrapper, Messages, InputWrapper
} from './style';
import Navbar from '../Navbar';
import { NormalInput } from '../../Forms/Inputs';

export default () => (
  <Container>
    <Navbar />
    <ContentWrapper>
      <Messages>
        Message
      </Messages>
      <InputWrapper>
        <NormalInput size="small" white />
      </InputWrapper>
    </ContentWrapper>
  </Container>
);
