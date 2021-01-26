import React, { useState } from 'react';
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
    <>
      <h1>Child component: 1</h1>
      <PrimaryButton
        className="my-2"
        size="large"
        onClick={openFullScreenModal}
        title="Go to child 2"
      />
    </>
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
    <>
      <h1>Parent component</h1>
      <PrimaryButton
        className="my-2"
        size="large"
        onClick={openFullScreenModal}
        title="Go to child 1"
      />
    </>
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
  const nestedFullScreenModals = () => {
    showFullScreen({
      title: 'Back to Home',
      body: ParentComponent
    });
  };

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
      {/* <Table data={data} header={header} /> */}

    </Container>
  );
};
