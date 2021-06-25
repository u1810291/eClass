/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card';
import { getRandColor } from '../../utils/random-color';
import {
  Header, CardsContainer, Body, Title, TotalBalance, DateContainer
} from './style';
import Spinner from '../Spinner';
import TableError from '../Table/Error';
import Dropdown from '../Forms/Dropdowns';

export default ({
  data, error, loading, options, option, setOption
}) => (
  <>
    <Header>
      <Header.Left>
        Balance
      </Header.Left>
      <Header.Right>
        <Dropdown
          value={option}
          options={options}
          onChange={(e) => setOption(e)}
        />
      </Header.Right>
    </Header>
    {error
      ? <TableError message={error} />
      : (
        <Body>
          {loading ? <Spinner contain black /> : data.length && (
            <Card color="#FFFFFF" size="small">
              <CardsContainer>
                {data.map((el, i) => (
                  <Card key={i} color={getRandColor()} size="small">
                    <Title>
                      {el.subject_name ? el.subject_name : ''}
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
                      {el.description}
                    </DateContainer>
                    <DateContainer.Text>
                      {el.date}
                    </DateContainer.Text>
                  </Card>
                ))}
              </CardsContainer>
            </Card>
          )}
        </Body>
      )}
  </>
);
