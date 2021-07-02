/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/teacher/homeworks/actions';
import { getFiles, getFileById } from '../../../redux/modules/files/actions';
import HomeworksHeader from '../../../components/Headers/HomeworksHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { teacherHomeworksHeader } from '../../../redux/modules/table/common';
import { toolTips } from './helper';

export default () => {
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.teacherHomeworksReducers);
  const headerData = useSelector(({ tableReducer }) => tableReducer.teacherHomeworksHeader);
  const header = useMemo(() => headerMaker(headerData), [headerData]);
  const [pageIndex, setPageIndex] = useState(0);
  const files = useSelector((state) => state.filesReducers);
  const [completed, setCompleted] = useState();
  const [pageSize, setPageSize] = useState(0);
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
    const found = sort && teacherHomeworksHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const query = useMemo(
    () => `${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}&${completedFilter}`,
    [pageIndex, pageSize, sortQuery, dateFilter, completedFilter]
  );
  useEffect(() => {
    dispatch(getFiles());
    dispatch(fetchData({
      query: `${query}`
    }));
  }, [fetchData, query]);
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
      <HomeworksHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}
        clear={clear}
        total={total}
        setCompleted={setCompleted}
      />
      {error ? (
        <TableError message={error} />
      ) : (
        <Table
          height="540"
          total={total}
          toolTips={toolTips}
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
