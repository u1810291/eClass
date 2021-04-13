import React, { useEffect, useState, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './style';
import { toolTips } from './helper';
import Table from '../../../components/Table';
import ZoomHeader from '../../../components/Headers/ZoomHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData } from '../../../redux/modules/admin/tariffs/actions';
import { adminAccountsHeader } from '../../../redux/modules/table/common';
import { useShowModal } from '../../../hooks/modal';

export default () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState(undefined);
  const headerData = useSelector(({ tableReducer }) => tableReducer.adminAccountsHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);
  const dispatch = useDispatch();
  const { showBlured } = useShowModal();

  const {
    data, error, total, loading
  } = useSelector((state) => state.adminTariffsReducers);

  const sortQuery = useMemo(() => {
    const found = sort && adminAccountsHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => `&page=${pageIndex}&size=${pageSize}${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(fetchData({ query }));
  }, [fetchData, query]);

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
      <ZoomHeader
        setSearch={setSearch}
        search={search}
        setDate={setDate}
        date={date}
        showBlured={showBlured}
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
