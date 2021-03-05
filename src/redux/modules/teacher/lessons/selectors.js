/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import moment from 'moment';

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    id: el.id,
    attendances: el.attendances && el.attendances.map((item) => ({
      missed: item.missed,
      student: item.student.full_name,
      student_username: item.student.username
    })),
    canceled: el.canceled,
    finished: el.finished,
    group_name: el.group.name,
    group_description: el.group.description,
    students: el.students && el.students.map((item) => ({
      student_name: item.full_name,
      student_username: item.username
    })),
    lesson_id: el.id,
    rescheduled: el.rescheduled,
    scheduled_start: moment(el.scheduled_start).format('DD-MM-YYYY hh:mm:ss'),
    started: el.started,
    started_at: moment(el.started_at || '').format('DD-MM-YYYY hh:mm:ss'),
    subject_name: el.subject.name,
    subject_id: el.subject.id,
    duration: el.duration,
    teacher: {
      name: el.teacher.full_name,
      role: 'Teacher',
      image: null
    },
    meeting_id: el.meeting_id,
    meeting_password: el.meeting_password,
    subject: el.subject.name,
    link: {
      join: el.join_url,
      start_url: el.start_url
    }
  }));
  return { total: total_elements, data: filtered };
}

export function startLessonSelector(data) {
  const filtered = {
    attendances: data.attendances.map((el) => ({
      missed: el.missed,
      student: {
        full_name: el.student.full_name,
        id: el.student.id,
        username: el.student.username
      }
    })),
    canceled: data.canceled,
    duration: data.duration,
    finished: data.finished,
    group: {
      description: data.group.description,
      id: data.group.id,
      name: data.group.name
    },
    id: data.id,
    rescheduled: data.rescheduled,
    scheduled_start: data.scheduled_start,
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
