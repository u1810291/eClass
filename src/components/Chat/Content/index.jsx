/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import {
  Container, ContentWrapper, Messages, InputWrapper, MessageCard, MessageDate
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
          <MessageCard key={i} owner={i % 2 || false}>
            <MessageCard.Item className={classNames('body-medium')}>
              {i}
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Alias quas temporibus est laboriosam corporis id perferendis
              cum rem exercitationem rerum tempora iure quo neque
              laudantium sed natus, ipsum quae dolores!
              <MessageDate className={classNames('button-medium')}>
                {moment(new Date()).format('hh:mm:ss')}
              </MessageDate>
            </MessageCard.Item>
          </MessageCard>
        ))}
      </Messages>
      <InputWrapper>
        <InputWrapper.Item>
          <DynamicImage name="Itachi Uchiha" />
        </InputWrapper.Item>
        <NormalInput size="medium" placeholder="Please write something..." white />
        <UploadInput setFieldValue={[]} />
      </InputWrapper>
    </ContentWrapper>
  </Container>
);
