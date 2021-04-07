import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from './style';
import Table from '../../../components/Table';
import { fetchData } from '../../../redux/modules/admin/tariffs/actions';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);
  const {
    data, error, total, loading
  } = useSelector((state) => state.adminTariffsReducers);
  // eslint-disable-next-line no-console
  console.log(error);
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
