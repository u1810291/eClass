import moment from 'moment';

export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    date: moment(el.scheduled_start).format('DD.MM.YYYY'),
    time: moment(el.scheduled_start).format('HH:mm:ss'),
    id: el.id,
    duration: el.duration,
    teacher: {
      name: el.teacher.full_name,
      role: 'Teacher',
      image: null
    },
    subject: el.subject.name,
    link: { join: el.join_url }
  }));
  return { total: total_elements, data: filtered };
}

export function joinLessonSelector(data) {
  const filtered = {
    api_key: data.api_key ? data.api_key : '',
    attendances: data.attendances ? data.attendances.map((el) => ({
      missed: el.missed,
      student: {
        full_name: el.student.full_name,
        id: el.student.id,
        username: el.student.username
      }
    })) : '',
    canceled: data.canceled,
    duration: data.duration,
    finished: data.finished,
    group: {
      description: data.group.description,
      id: data.group.id,
      name: data.group.name
    },
    students: data.students ? data.students.map((el) => ({
      full_name: el.full_name,
      id: el.id,
      username: el.username
    })) : '',
    id: data.id,
    join_url: data.join_url ? data.join_url : '',
    meeting_id: data.meeting_id ? data.meeting_id : '',
    meeting_password: data.meeting_password ? data.meeting_password : '',
    rescheduled: data.rescheduled,
    scheduled_start: data.scheduled_start,
    signature: data.signature ? data.signature : '',
    start_url: data.start_url ? data.start_url : '',
    started: data.started,
    started_at: data.started_at,
    subject: {
      id: data.subject.id,
      name: data.subject.name
    },
    teacher: {
      full_name: data.teacher.full_name,
      id: data.teacher.id,
      username: data.teacher.username
    }
  };
  return { data: filtered };
}

export function cancelLessonSelector(data) {
  return { data };
}
