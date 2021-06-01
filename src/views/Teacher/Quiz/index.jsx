import React, { useEffect, useMemo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';

import { fetchData } from '../../../redux/modules/teacher/quizes/actions';
import { teacherLessonsHeader } from '../../../redux/modules/table/common';
import QuizesHeader from '../../../components/Headers/QuizesHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.teacherQuizesReducers);

  const headerData = useSelector(({ tableReducer }) => tableReducer.teacherQuizesHeader);
  const header = useMemo(() => headerMaker(headerData), [headerData]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [completed, setCompleted] = useState();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState(undefined);
  const [sort, setSort] = useState();

  const dateFilter = useMemo(
    () => (date
      ? `&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date]
  );

  const completedFilter = useMemo(
    () => (completed
      ? `&completed=${completed}`
      : ''),
    [completed]
  );
  const sortQuery = useMemo(() => {
    const found = sort && teacherLessonsHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const query = useMemo(
    () => `${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}${completedFilter}`,
    [pageIndex, pageSize, sortQuery, dateFilter, completedFilter]
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

  const clear = () => {
    setSearch('');
    setDate(undefined);
    setSort();
    setCompleted(false);
  };
  return (
    <Container>
      <QuizesHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}
        clear={clear}
        completed={completed}
        setCompleted={setCompleted}
      />
      {error ? (
        <TableError message={error} />
      ) : (
        <Table
          height="590"
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
