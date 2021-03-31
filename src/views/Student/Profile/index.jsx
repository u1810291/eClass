import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../../components/Profile';

export default () => {
  const { data } = useSelector((state) => state.state);
  return (
    <>
      <Profile data={data} />
    </>
  );
};
