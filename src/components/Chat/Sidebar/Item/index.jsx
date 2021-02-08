import React from 'react';
import {
  ItemWrapper, Title, Message, ImageWrapper
} from './style';

const Item = ({
  id, active, setActive
}) => (
  <ItemWrapper
    active={active}
    onClick={() => setActive(!active)}
  >
    <ImageWrapper>
      Image
    </ImageWrapper>
    <Title>
      Title
    </Title>
    <Message>

      {id}
      Item
    </Message>
  </ItemWrapper>
);

export default Item;
