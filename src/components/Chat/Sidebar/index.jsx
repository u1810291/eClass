/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Item from './Item';
import {
  Container, Header, Body, ItemWrapper, Counter, Heading
} from './style';
import { getRandColor } from '../../../utils/random-color';
import { PrimaryButton } from '../../Buttons';

export default () => {
  const data = [
    {
      id: 1,
      group: true
    },
    {
      id: 2,
      group: true
    },
    {
      id: 3,
      group: true
    },
    {
      id: 4,
      group: false
    },
    {
      id: 5,
      group: false
    },
    {
      id: 6,
      group: false
    },
    {
      id: 7,
      group: false
    },
    {
      id: 8,
      group: false
    },
    {
      id: 9,
      group: false
    },
    {
      id: 10,
      group: false
    },
    {
      id: 11,
      group: false
    },
    {
      id: 12,
      group: false
    },
    {
      id: 13,
      group: false
    },
    {
      id: 14,
      group: false
    },
    {
      id: 15,
      group: false
    },
    {
      id: 16,
      group: false
    },
    {
      id: 17,
      group: false
    },
    {
      id: 18,
      group: false
    },
    {
      id: 19,
      group: false
    },
    {
      id: 20,
      group: false
    }
  ];
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Header>
        <PrimaryButton size="medium" color="#0062FF" icon="top" title="Add New" />
      </Header>
      <Body>
        {data.map((el, i) => (
          <ItemWrapper
            key={i}
          >
            {el.group && (
              <Heading color={getRandColor()}>
                Group name
                {el.id}
                {' '}
                <Counter>15</Counter>
              </Heading>
            )}
            <Item
              id={i}
              active={active}
              setActive={setActive}
              imgSrc={null}
              name="Some Name"
            />
          </ItemWrapper>
        ))}
      </Body>
    </Container>
  );
};
