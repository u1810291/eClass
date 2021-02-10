/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card';
import {
  Header, CardsContainer, Body, Title, TotalBalance, DateContainer
} from './style';
import { getRandColor } from '../../utils/random-color';

export default ({ date }) => (
  <>
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
              <Title>
                Math
              </Title>
              <TotalBalance>
                Remaining lessons
                <TotalBalance.Bold>
                  255000 sum
                </TotalBalance.Bold>
              </TotalBalance>
              <DateContainer>
                Last paid lesson
                {' '}
              </DateContainer>
              <DateContainer.Text>
                {date}
              </DateContainer.Text>
            </Card>
          ))}
        </CardsContainer>
      </Card>
    </Body>
  </>
);
