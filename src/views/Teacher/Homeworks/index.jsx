import React, { useEffect, useState, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/teacher/homeworks/actions';
import { getFiles } from '../../../redux/modules/files/actions';
import { toolTips } from './helper';
import HomeworksHeader from '../../../components/Headers/HomeworksHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { teacherHomeworksHeader } from '../../../redux/modules/table/common';

export default () => {
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.teacherHomeworksReducers);
  const headerData = useSelector(({ tableReducer }) => tableReducer.teacherHomeworksHeader);
  const header = useMemo(() => headerMaker(headerData), [headerData]);
  const [pageIndex, setPageIndex] = useState(0);
  const files = useSelector((state) => state.filesReducers);
  console.log(files.data);

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
  const sortQuery = useMemo(() => {
    const found = sort && teacherHomeworksHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const query = useMemo(
    () => `${dateFilter}&page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery, dateFilter]
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

  return (
    <Container>
      <HomeworksHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}

      />
      {error ? (
        <TableError message={error} />
      ) : (
        <Table
          height="540"
          total={total}
          data={data}
          toolTips={toolTips}
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
