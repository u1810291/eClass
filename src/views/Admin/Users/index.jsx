import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import Dropdown from '../../../components/Forms/Dropdowns';
// import Table from '../../../components/Table';
import { options } from './helper';
import { useShowModal } from '../../../hooks/modal';
import { PrimaryButton } from '../../../components/Buttons';
// import Service from '../../../services/admin/student';

const SecondChildComponent = () => (
  <>
    <h1>Child component: 2</h1>
  </>
);

const FirstChildComponent = () => {
  const { showFullScreen } = useShowModal();
  const openFullScreenModal = () => {
    showFullScreen({
      title: 'Back to Child One',
      body: SecondChildComponent
    });
  };
  return (
    <div style={{ position: 'absolute' }}>
      <h1>Child component: 1</h1>
      <PrimaryButton
        className="my-2"
        size="large"
        onClick={openFullScreenModal}
        title="Go to child 2"
      />
    </div>
  );
};

const ParentComponent = () => {
  const { showFullScreen } = useShowModal();
  const openFullScreenModal = () => {
    showFullScreen({
      title: 'Back to Parent',
      body: FirstChildComponent
    });
  };

  return (
    <div style={{ position: 'absolute' }}>
      <h1>Parent component</h1>
      <PrimaryButton
        className="my-2"
        size="large"
        onClick={openFullScreenModal}
        title="Go to child 1"
      />
    </div>
  );
};

export default () => {
  // const [data, setData] = useState([]);
  // Service.getAllStudents().then((res) => {
  //   console.log(res.data.content);
  //   setData(res.data.content);
  // }).catch((err) => console.log(err));

  const [userType, setUserType] = useState(undefined);
  const { showFullScreen } = useShowModal();
  const history = useHistory();
  const nestedFullScreenModals = () => (
    showFullScreen({
      title: 'Back to Home',
      body: ParentComponent
    }));

  return (
    <Container>
      <Dropdown
        label="Users"
        placeholder="Select"
        options={options}
        value={userType}
        onChange={setUserType}
        size="large"
      />

      <PrimaryButton
        className="my-2"
        size="large"
        onClick={nestedFullScreenModals}
        title="Nested modals"
      />
      <PrimaryButton
        className="my-2"
        size="large"
        onClick={history.push('')}
        title="Register Student"

      />
      {/* <Table data={data} header={header} /> */}

    </Container>
  );
};
