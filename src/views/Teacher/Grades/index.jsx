import React, { useEffect, useMemo, useState } from 'react';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Attendance from '../../../components/Attendance/Teacher';
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
  const dateFilter = useMemo(
    () => (date
      ? `${size}&from_date=${date.start.toISOString()}&to_date=${date.end.toISOString()}`
      : ''),
    [date, size]
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

  useEffect(() => {
    dispatch(fetchData({ query: dateFilter }));
  }, [dateFilter, total]);

  const events = data && data.map((el) => ({
    id: el.id,
    start: moment(new Date(el.scheduled_start)).toDate(),
    end: el.finished ? moment(new Date(el.finished_at)).toDate()
      : moment(new Date(el.scheduled_start)).add(1, 'hours').toDate(),
    title: el.group.name,
    event: { ...el }
  }));
  return (
    <Container>
      <AttendanceHeader
        subjects={subjects}
        clear={clear}
      />
      <Attendance
        loading={loading}
        data={events}
        error={error}
        date={date}
        setDate={setDate}
      />
    </Container>
  );
};
