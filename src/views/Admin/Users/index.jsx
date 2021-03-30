import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Search, Filter, Body
} from './style';
import { usersHeader } from '../../../redux/modules/table/common';

import Dropdown from '../../../components/Forms/Dropdowns';
import {
  options, adminToolTips, teacherToolTips, studentToolTips
} from './helper';
import { SearchableInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData } from '../../../redux/modules/admin/users/actions';
import TableError from '../../../components/Table/Error';
import { getCities, getCountries, getReasons } from '../../../redux/modules/lists/actions';

export default () => {
  const [userType, setUserType] = useState(1);
  const [userName, setUserName] = useState('student');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [sort, setSort] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(getCities());
      dispatch(getCountries());
      dispatch(getReasons());
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

  const query = useMemo(
    () => `?page=${pageIndex}&size=${pageSize}${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '') || null;
  };

  const toolTips = () => {
    if (userType === 1) {
      return adminToolTips;
    }
    if (userType === 2) {
      return teacherToolTips;
    }
    if (userType === 3) {
      return studentToolTips;
    }
    return null;
  };

  useEffect(() => {
    dispatch(fetchData(userName.toLowerCase(), query));
  }, [fetchData, setUserName, userName]);

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
        <PrimaryButton
          className="my-2"
          size="large"
          onClick={() => (getType().length > 0
            ? history.push(`/users/add/${getType()}`)
            : history.push(`/users/add/${userType}`))}
          title="Add new"
        />
      </Filter>
      <Body>
        {error ? (
          <TableError message={error} />
        ) : (
          <Table
            height="500"
            total={total}
            data={data}
            toolTips={toolTips}
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
