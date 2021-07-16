/* eslint-disable react/no-array-index-key */
import React from 'react';
import Item from './Item';
import {
  Container, Header, Body, ItemWrapper, Counter, Heading
} from './style';
import { getRandColor } from '../../../utils/random-color';
import { PrimaryButton } from '../../Buttons';

export default ({ chats, selected, setSelected }) => (
  <Container>
    <Header>
      <PrimaryButton size="medium" color="#0062FF" icon="top" title="Add New" />
    </Header>
    <Body>
      {chats.length && chats.map((el) => (
        <ItemWrapper
          key={el.id}
        >
          {el.type === 'group' && (
            <Heading color={getRandColor()}>
              {el.name}
              <Counter>15</Counter>
            </Heading>
          )}
          <Item
            el={el}
            active={selected}
            setActive={setSelected}
            imgSrc={null}
            name={el.name}
          />
        </ItemWrapper>
      ))}
    </Body>
  </Container>
);
