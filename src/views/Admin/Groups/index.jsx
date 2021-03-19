import React, { useEffect, useMemo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../components/Table';
import { Container } from './style';
import { fetchData } from '../../../redux/modules/admin/groups/actions';
import { getUser } from '../../../redux/modules/lists/actions';
import { groupsHeader } from '../../../redux/modules/table/common';
import GroupsHeader from '../../../components/Headers/GroupsHeader';
import TableError from '../../../components/Table/Error';
import { headerMaker } from '../../../components/Table/helper';
import { toolTips, subjectAddFormik, groupAddFormik } from './helper';
import { fetchData as subjectFetch } from '../../../redux/modules/admin/subjects/actions';

export default () => {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState();

  const {
    loading, data, total, error
  } = useSelector((state) => state.adminGroupsReducers);
  const headerData = useSelector(({ tableReducer }) => tableReducer.groupsHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);

  const sortQuery = useMemo(() => {
    const found = sort && groupsHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => `page=${pageIndex}&size=${pageSize}${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );

  useEffect(() => {
    dispatch(subjectFetch());
    dispatch(getUser('teacher'));
    dispatch(fetchData({ query }));
  }, [dispatch, query]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  return (
    <Container>
      <GroupsHeader
        setSearch={setSearch}
        search={search}
        subjectAddFormik={subjectAddFormik}
        groupAddFormik={groupAddFormik}
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
