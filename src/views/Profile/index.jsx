import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../components/Profile';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);

  // eslint-disable-next-line no-console
  console.log(userInfo);
  return (
    <>
      <Profile />
    </>
  );
};
