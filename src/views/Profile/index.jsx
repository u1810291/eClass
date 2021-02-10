import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import Profile from '../../components/Profile';
import profile from '../../services/student/profile';
import Spinner from '../../components/Spinner';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    profile.getProfile().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [profile]);
  if (loading) return <Spinner contain black />;

  return (
    <>
      <Profile data={data} />
    </>
  );
};
// const { userInfo } = useSelector((state) => state.userReducer);

// eslint-disable-next-line no-console
// console.log(userInfo);
