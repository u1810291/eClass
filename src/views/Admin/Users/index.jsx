import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Search, Filter, Body, AddButtons
} from './style';
import { usersHeader } from '../../../redux/modules/table/common';

import Dropdown from '../../../components/Forms/Dropdowns';
import {
  options, toolTips
} from './helper';
import { SearchableInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData } from '../../../redux/modules/admin/users/actions';
import TableError from '../../../components/Table/Error';
import { getCities, getCountries, getReasons } from '../../../redux/modules/lists/actions';
import { fetchData as subjects } from '../../../redux/modules/admin/subjects/actions';

export default () => {
  const [userType, setUserType] = useState(1);
  const [userName, setUserName] = useState('student');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const { tooltips } = toolTips(userType);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(getCities());
      dispatch(getCountries());
      dispatch(getReasons());
      dispatch(subjects());
    }
    return () => { isMounted = false; };
  }, [dispatch]);
  const {
    loading, data, total, error
  } = useSelector((state) => state.adminUsersReducers);

  const headerData = useSelector(({ tableReducer }) => tableReducer.usersHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);
  const sortQuery = useMemo(() => {
    const found = sort && usersHeader.find(({ id }) => id === sort.id);
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const searching = useMemo(
    () => (search ? `username=${search}` : ''), [search]
  );
  const query = useMemo(
    () => `${searching}page=${pageIndex}&size=${pageSize}${sortQuery}`,
    [pageIndex, pageSize, sortQuery, searching]
  );

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '') || null;
  };

  useEffect(() => {
    dispatch(fetchData({ isSearch: false, user: userName.toLowerCase(), action: 'list' }, query));
  }, [setUserName, userName, query]);

  useEffect(() => {
    if (search) dispatch(fetchData({ isSearch: true, user: userName.toLowerCase(), action: 'search' }, query));
  }, [search, setSearch]);

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  return (
    <Container>
      <Search>
        <SearchableInput
          white
          size="large"
          placeholder="Enter first name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Filter>
        <Dropdown
          placeholder="Select"
          options={options}
          value={userType}
          onChange={(e) => {
            setUserType(e);
            setUserName(() => options.find((el) => (el.id === e)).value.toString());
          }}
          size="large"
        />
        <AddButtons>
          <PrimaryButton
            size="medium"
            onClick={() => (getType().length > 0
              ? history.push(`/users/add/${getType()}`)
              : history.push(`/users/add/${userType}`))}
            title="Add new"
          />
        </AddButtons>
      </Filter>
      <Body>
        {error ? (
          <TableError message={error} />
        ) : (
          <Table
            height="500"
            total={total}
            data={data}
            toolTips={tooltips}
            header={headers}
            loading={loading}
            setSort={setSort}
            sort={sort}
            subData={data}
            onChange={handleOnChange}
          />
        )}
      </Body>

    </Container>
  );
};
