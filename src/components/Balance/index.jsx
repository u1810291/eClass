/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card';
import { getRandColor } from '../../utils/random-color';
import {
  Header, CardsContainer, Body, Title, TotalBalance, DateContainer
} from './style';
import Spinner from '../Spinner';
import TableError from '../Table/Error';

export default ({
  date, data, error, loading
}) => (
  <>
    <Header>
      <Header.Left>
        Balance
      </Header.Left>
      <Header.Right>
        Total balance: 750.000sums
      </Header.Right>
    </Header>
    {error
      ? <TableError message={error} />
      : (
        <Body>
          <Card color="#FFFFFF" size="small">
            <CardsContainer>
              {loading ? <Spinner contain black /> : data.map((el, i) => (
                <Card key={i} color={getRandColor()} size="small">
                  <Title>
                    {el.subject_name}
                  </Title>
                  <TotalBalance>
                    <TotalBalance.Bold>
                      {el.available_balance}
                      {' '}
                      sum
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
      )}
  </>
);
