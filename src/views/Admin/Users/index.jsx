import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Search, Filter, Body
} from './style';
import Dropdown from '../../../components/Forms/Dropdowns';
import { options, toolTips } from './helper';
import { SearchableInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import Table from '../../../components/Table';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData } from '../../../redux/modules/admin/users/actions';
import TableError from '../../../components/Table/Error';

export default () => {
  const [userType, setUserType] = useState(undefined);
  const {
    loading, data, total, error
  } = useSelector((state) => state.adminUsersReducers);
  const history = useHistory();
  const dispatch = useDispatch();
  const [sort, setSort] = useState();

  const headerData = useSelector(({ tableReducer }) => tableReducer.usersHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '') || null;
  };
  const onChangeFunc = () => null;

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

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
          onChange={setUserType}
          size="large"
        />

        <PrimaryButton
          className="my-2"
          size="large"
          onClick={() => (getType().length > 0 ? history.push(`/users/add/${getType()}`) : history.push('/users/add/student'))}
          title="Add new"
        />
      </Filter>
      <Body>
        {error ? (
          <TableError message={error} />
        ) : (
          <Table
            height="500px"
            total={total}
            data={data}
            toolTips={toolTips}
            header={headers}
            loading={loading}
            setSort={setSort}
            sort={sort}
            subData={data}
            onChange={onChangeFunc}
          />
        )}
      </Body>

    </Container>
  );
};
