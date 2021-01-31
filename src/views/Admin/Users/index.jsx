import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Search, Filter, Body
} from './style';
import Dropdown from '../../../components/Forms/Dropdowns';
import { options, header } from './helper';
import { SearchableInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import Table from '../../../components/Table';
import users from '../../../services/admin/users';

export default () => {
  const [userType, setUserType] = useState(undefined);
  const [data, setData] = useState([]);
  const history = useHistory();

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '') || null;
  };
  users.getUsers(getType().length === 0 ? 'student' : getType()).then((res) => setData(res.data.content)).catch((err) => console.log(err));
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

        <Table data={data} header={header} />
      </Body>

    </Container>
  );
};
