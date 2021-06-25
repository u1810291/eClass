/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import Card from '../../Card';
import { getRandColor } from '../../../utils/random-color';
import {
  Header, CardsContainer, Body, Title, TotalBalance, DateContainer
} from './style';
import Spinner from '../../Spinner';
import TableError from '../../Table/Error';
import Dropdown from '../../Forms/Dropdowns';

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
                      {el.code && el.code.replace(/_/g, '  ')}
                    </Title>
                    <TotalBalance>
                      <TotalBalance.Bold>
                        {el.amount}
                        {' '}
                        sum
                      </TotalBalance.Bold>
                    </TotalBalance>
                    <DateContainer className={classNames('heading-5')}>
                      Last paid lesson
                      {' '}
                      <div>{el.description}</div>
                      {el.to
                        ? (
                          <span>
                            <div className={classNames('weight-bold')}>To</div>
                            {' '}
                            {el.to.full_name}
                          </span>
                        )
                        : ''}
                      {el.from
                        ? (
                          <span>
                            <div className={classNames('weight-bold')}>From</div>
                            {' '}
                            {el.from.full_name}
                          </span>
                        )
                        : ''}
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
