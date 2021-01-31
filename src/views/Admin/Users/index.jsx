import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Header, Search, Filter, Body
} from './style';
import Dropdown from '../../../components/Forms/Dropdowns';
import { options, header } from './helper';
import { SearchableInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import Table from '../../../components/Table';
import { fetchData } from '../../../redux/modules/admin/users/actions';

export default () => {
  const [userType, setUserType] = useState(undefined);
  const { data } = useSelector((state) => state.adminUsersReducers);
  const history = useHistory();
  const dispatch = useDispatch();

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '') || null;
  };
  useEffect(() => {
    dispatch(fetchData());
    // users.getUsers(getType().length === 0 ? 'student'
    // : getType()).then((res) => setData(res.data.content)).catch((err) => console.log(err));
  }, [fetchData]);
  return (
    <Container>
      <Header>
        <PrimaryButton
          className="my-2"
          size="large"
          onClick={() => (getType().length > 0 ? history.push(`/users/add/${getType()}`) : history.push('/users/add/student'))}
          title="Add new"
        />
      </Header>
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
      </Filter>
      <Body>
        {console.log(data)}
        <Table data={data} header={header} />
      </Body>

    </Container>
  );
};
