import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../components/Profile';

export default () => {
  const state = useSelector((state) => state.state);
  return (
    <>
      <Profile data="data" />
    </>
  );
};
