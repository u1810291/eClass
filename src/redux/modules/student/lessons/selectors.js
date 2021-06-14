import moment from 'moment';

export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    date: moment(el.scheduled_start).format('MM-DD-YYYY'),
    time: moment(el.scheduled_start).format('HH:mm:ss'),
    scheduled_start: moment(el.scheduled_start).format('MM-DD-YYYY HH:mm:ss'),
    started_at: moment(el.started_at || '').format('MM-DD-YYYY HH:mm:ss'),
    finished_at: moment(el.finished_at
      || new Date(new Date(el.scheduled_start)
        .setHours(new Date(el.scheduled_start).getHours() + 1))
        .setMinutes((new Date(el.scheduled_start).getMinutes() + 29)))
      .format('MM-DD-YYYY HH:mm:ss'),
    id: el.id,
    started: el.started,
    finished: el.finished,
    canceled: el.canceled,
    rescheduled: el.rescheduled,
    duration: el.duration,
    teacher: {
      id: el.teacher.id,
      name: el.teacher.full_name,
      role: el.teacher.username,
      image: null
    },
    subject: el.subject.name,
    subject_id: el.subject.id,
    link: { join: el.join_url },
    attendance: {
      declined: el.attendance ? el.attendance.declined : '',
      missed: el.attendance ? el.attendance.missed : '',
      start_date: el.attendance ? el.attendance.start_date : ''
    },
    ...(el.finished_at && { finished_at: el.finished_at }),
    group_name: el.group.name,
    group: {
      id: el.group.id,
      name: el.group.name,
      description: el.group.description
    }
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
