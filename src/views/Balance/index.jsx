/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import {
  Continer, Header, CardsContainer, Body
} from './style';
import { getRandColor } from '../../utils/random-color';

export default () => {
  const [data, setData] = useState('');
  useEffect(() => {
    setData('some');
  }, [data, setData]);
  return (
    <Continer>
      <Header>
        <Header.Left>
          Balance
        </Header.Left>
        <Header.Right>
          Total balance: 750.000sums
        </Header.Right>
      </Header>
      <Body>

        <Card color="#FFFFFF" size="small">
          <CardsContainer>

            {[...Array(20)].map((el, i) => (
              <Card key={i} color={getRandColor()} size="small">
                {data}
                Balance
              </Card>
            ))}
          </CardsContainer>
        </Card>
      </Body>
    </Continer>
  );
};
