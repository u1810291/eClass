import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Attendance from '../../../components/Attendance';
import AttendanceHeader from '../../../components/Headers/AttendanceHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/student/lessons/actions';

export default () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const { data, loading, error } = useSelector((state) => state.studentLessonsReducers);
  const dateFilter = useMemo(
    () => (date
      ? `&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date]
  );
  const query = useMemo(
    () => `size=50&${dateFilter}`,
    [dateFilter]
  );

  useEffect(() => {
    dispatch(fetchData({ query }));
  }, [query]);
  return (
    <Container>
      <AttendanceHeader />
      <Attendance
        loading={loading}
        data={data}
        error={error}
        date={date}
        setDate={setDate}
      />
    </Container>
  );
};
