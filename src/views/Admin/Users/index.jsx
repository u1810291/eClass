import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import Dropdown from '../../../components/Forms/Dropdowns';
import { options } from './helper';
import { PrimaryButton } from '../../../components/Buttons';

export default () => {
  const [userType, setUserType] = useState(undefined);
  const history = useHistory();

  const getType = () => {
    // eslint-disable-next-line no-nested-ternary
    const value = options.map((i) => (i.id === userType ? i.value.length
      ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
      : '' : ''));
    return value.filter((i) => i !== '');
  };
  return (
    <Container>
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
        onClick={() => (getType().length > 0 ? history.push(`/users/add/${getType()}`) : null)}
        title="Register"

      />
      {/* <Table data={data} header={header} /> */}

    </Container>
  );
};
