import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Attendance from '../../../components/Attendance';
import AttendanceHeader from '../../../components/Headers/AttendanceHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/student/lessons/actions';

export default () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.studentLessonsReducers);
  useEffect(() => {
    dispatch(fetchData(''));
  }, []);
  return (
    <Container>
      <AttendanceHeader data={data} loading={loading} error={error} />
      <Attendance />
    </Container>
  );
};
