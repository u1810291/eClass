import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../../components/Profile';
import { fetchData } from '../../../redux/modules/student/profile/actions';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);
  const { data } = useSelector((state) => state.state);
  return (
    <>
      <Profile data={data} />
    </>
  );
};
