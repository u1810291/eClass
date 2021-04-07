import React from 'react';
import { Container, Content } from './style';
import Table from '../../../components/Table';

export default () => {
  const data = '';
  return (
    <Container>
      <Content>
        <Table
          height="590"
          total={total}
          data={data}
          toolTips={toolTips}
          header={headers}
          loading={loading}
          subData={data}
          setSort={setSort}
          onChange={handleOnChange}
        />
      </Content>
      <Content>
        <Table
          height="590"
          total={total}
          data={data}
          toolTips={toolTips}
          header={headers}
          loading={loading}
          subData={data}
          setSort={setSort}
          onChange={handleOnChange}
        />
      </Content>
    </Container>
  );
};
