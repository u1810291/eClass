import React, { useEffect, useMemo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/admin/lessons/actions';
import { adminLessonsHeader } from '../../../redux/modules/table/common';
import LessonsHeader from '../../../components/Headers/LessonsHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { toolTips } from './helper';

export default () => {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState(undefined);
  const [sort, setSort] = useState();

  const {
    loading, data, total, error
  } = useSelector((state) => state.adminLessonsReducers);
  const headerData = useSelector(({ tableReducer }) => tableReducer.adminLessonsHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);

  const dateFilter = useMemo(
    () => (date
      ? `&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date]
  );

  const sortQuery = useMemo(() => {
    const found = sort && adminLessonsHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => `${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery, dateFilter]
  );

  useEffect(() => {
    dispatch(fetchData({ query }));
  }, [fetchData, query]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(
      fetchData({
        isSearch: true,
        query: `${query}${search ? `&search=${search}` : ''}`
      })
    );
  }, [dispatch, search]);

  return (
    <Container>
      <LessonsHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}
      />
      {error ? (
        <TableError message={error} />
      ) : (
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
      )}
    </Container>
  );
};
