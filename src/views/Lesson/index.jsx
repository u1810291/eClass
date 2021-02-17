import React, { useEffect, useMemo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/lessons/actions';
import { getHeader } from './helper';
import LessonsHeader from '../../components/Headers/LessonsHeader';
import TableError from '../../components/Table/Error';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const {
    loading, data, total, error
  } = useSelector((state) => state.lessonsReducers);
  const header = getHeader(userInfo);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const [search, setSearch] = useState('');
  const [date, setDate] = useState(undefined);
  const [sort, setSort] = useState();

  const dispatch = useDispatch();

  const dateFilter = useMemo(
    () => (date
      ? `&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date]
  );
  const sortQuery = useMemo(() => {
    const found = sort && getHeader(userInfo).find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const query = useMemo(
    () => `${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery, dateFilter]
  );
  useEffect(() => {
    dispatch(fetchData({
      user: userInfo.role,
      isSearch: false,
      query: `${query}`
    }));
  }, [fetchData, query]);
  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(
      fetchData({
        user: userInfo.role,
        isSearch: true,
        query: `${query}${search ? `&search=${search}` : ''}`
      })
    );
    // eslint-disable-next-line
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
          total={total}
          data={data}
          header={header}
          loading={loading}
          subData={data}
          setSort={setSort}
          onChange={handleOnChange}
        />
      )}
    </Container>
  );
};
