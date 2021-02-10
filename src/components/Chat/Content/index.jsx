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
            <p>
              {i}
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Alias quas temporibus est laboriosam corporis id perferendis
              cum rem exercitationem rerum tempora iure quo neque
              laudantium sed natus, ipsum quae dolores!
            </p>
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
