import React, { useEffect, useMemo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/student/quizes/actions';
import { headerMaker } from '../../../components/Table/helper';
import { studentQuizesHeader } from '../../../redux/modules/table/common';
import { toolTips } from './helper';
import QuizesHeader from '../../../components/Headers/QuizesHeader';
import TableError from '../../../components/Table/Error';

export default () => {
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.quizesReducers);

  const headerData = useSelector(({ tableReducer }) => tableReducer.studentQuizesHeader);
  const header = useMemo(() => headerMaker(headerData), [headerData]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [search, setSearch] = useState('');
  const [date, setDate] = useState(undefined);
  const [completed, setCompleted] = useState();
  const [sort, setSort] = useState();

  const completedFilter = useMemo(
    () => (completed
      ? `&completed=${completed}`
      : ''),
    [completed]
  );
  const dateFilter = useMemo(
    () => (date
      ? `&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date]
  );
  const sortQuery = useMemo(() => {
    const found = sort && studentQuizesHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const query = useMemo(
    () => `${completedFilter}${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery, dateFilter, completed]
  );
  useEffect(() => {
    dispatch(fetchData({
      query: `${query}`
    }));
  }, [query]);
  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  const clear = () => {
    setSearch('');
    setDate(undefined);
    setSort();
    setCompleted(false);
  };
  return (
    <Container>
      <QuizesHeader
        date={date}
        clear={clear}
        total={total}
        search={search}
        setDate={setDate}
        setSearch={setSearch}
        completed={completed}
        setCompleted={setCompleted}
      />
      {error ? (
        <TableError message={error} />
      ) : (
        <Table
          height="590"
          toolTips={toolTips}
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
