import React from 'react';
import { ItemWrapper } from './style';

const Item = ({ id, active }) => (
  <ItemWrapper active={active}>
    {id}
    Item
  </ItemWrapper>
);

export default Item;
