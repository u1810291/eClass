import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { Continer, Header } from './style';

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

      <Card color="#FFFFFF" size="small">
        {data}
        Balance
      </Card>
    </Continer>
  );
};
