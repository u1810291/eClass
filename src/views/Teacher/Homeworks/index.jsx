/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import DownloadLink from 'react-download-link';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/teacher/homeworks/actions';
import { getFiles, getFileById } from '../../../redux/modules/files/actions';
import { toolTips } from './helper';
import HomeworksHeader from '../../../components/Headers/HomeworksHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { teacherHomeworksHeader } from '../../../redux/modules/table/common';
import file from '../../../services/files';

export default () => {
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.teacherHomeworksReducers);
  const headerData = useSelector(({ tableReducer }) => tableReducer.teacherHomeworksHeader);
  const header = useMemo(() => headerMaker(headerData), [headerData]);
  const [pageIndex, setPageIndex] = useState(0);
  const files = useSelector((state) => state.filesReducers);
  // eslint-disable-next-line no-console
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

  // function handleClick() {
  //   file.downloadFile('87958fc1-92e3-4b6f-b0fe-4023f71d5104')
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   window.location.href = response.url;
  //   dispatch(getFileById({ id: '87958fc1-92e3-4b6f-b0fe-4023f71d5104' }));
  // }
  const getFile = (id) => file.downloadFile(id);
  return (
    <Container>
      <HomeworksHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}

      />
      <DownloadLink
        label="Download"
        filename="filename.pdf"
        exportFile={() => getFile('555332a3-55c7-4924-b91e-b49a2b2973bf')}
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
