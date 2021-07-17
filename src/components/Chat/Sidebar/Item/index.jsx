import React from 'react';
import moment from 'moment';
import {
  ItemWrapper, Title, Message, Body, Heading, Footer
} from './style';
import { DynamicImage } from '../../../DynamicImage';

const Item = ({
  el, active, setActive, name, imgSrc
}) => (
  <ItemWrapper
    active={active === el.id}
    onClick={() => setActive(el.id)}
  >
    <DynamicImage
      name={name}
      imgSrc={imgSrc}
      shape="round"
    />
    <Body>
      <Heading>
        <Title>
          {el.name}
        </Title>
        <Footer>
          {moment(new Date()).format('hh:mm')}
        </Footer>
      </Heading>
      <Message>
        {el.description}
      </Message>
    </Body>
  </ItemWrapper>
);

export default Item;
