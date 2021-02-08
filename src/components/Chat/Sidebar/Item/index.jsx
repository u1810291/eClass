import React from 'react';
import { ItemWrapper } from './style';

const Item = ({ id, active }) => (
  <ItemWrapper active={active}>
    {id}
    {console.log('some', active)}
    Item
  </ItemWrapper>
);

export default Item;
