import React from 'react';
import moment from 'moment';
import {
  ItemWrapper, Title, Message, Body, Heading, Footer
} from './style';
import { DynamicImage } from '../../../DynamicImage';

const Item = ({
  id, active, setActive, name, imgSrc
}) => (
  <ItemWrapper
    active={active}
    onClick={() => setActive(!active)}
  >
    <DynamicImage
      name={name}
      imgSrc={imgSrc}
      shape="round"
    />
    <Body>
      <Heading>
        <Title>
          Title
        </Title>
        <Footer>
          {moment(new Date()).format('hh:mm')}
        </Footer>
      </Heading>
      <Message>
        {id}
        Item
      </Message>
    </Body>
  </ItemWrapper>
);

export default Item;
