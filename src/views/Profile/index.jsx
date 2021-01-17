import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../components/Profile';

export default () => {
  const { userData } = useSelector((state) => state.userReducer);

  console.log(userData);
  return (
    <>
      <Profile />
    </>
  );
};
