import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Attendance from '../../../components/Attendance';
import AttendanceHeader from '../../../components/Headers/AttendanceHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/teacher/lessons/actions';

export default () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const {
    data, loading, error, total
  } = useSelector((state) => state.teacherLessonsReducers);
  const size = useMemo(
    () => (total
      ? `size=${total}`
      : ''),
    [total]
  );

  const allSubjects = data.length && data.map((el) => ({
    id: el.subject_id,
    name: el.subject
  }));

  const subjects = Array.from(new Set(allSubjects.length
    && allSubjects.map((el) => el.id))).map((id) => ({
    id,
    name: allSubjects.find((s) => s.id === id).name
  }));

  const clear = () => {
    setDate(undefined);
  };
  console.log(data);
  useEffect(() => {
    dispatch(fetchData({ query: size }));
  }, [size]);

  return (
    <Container>
      <AttendanceHeader
        subjects={subjects}
        clear={clear}
      />
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
