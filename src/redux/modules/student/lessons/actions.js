import types from '../../../../constants/action-types';
import { popFullScreen } from '../../modal/actions';
import eventMock from '../../../../services/student/lesson';

export const setLoading = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_ERROR, payload });
export const setStartError = (payload) => ({ type: types.STUDENT_JOIN_LESSONS_ERROR, payload });
export const fetchData = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_FETCH_DATA, payload });

export const joinLesson = (payload, success) => ({
  type: types.STUDENT_JOIN_LESSONS,
  payload,
  success
});

export const cancelLesson = (payload, success) => ({
  type: types.STUDENT_CANCEL_LESSONS,
  payload,
  success
});

export const addRating = (payload, success) => ({
  type: types.STUDENT_ADD_RATING_LESSONS,
  payload,
  success
});

export const revokeRating = (payload, success) => ({
  type: types.STUDENT_REVOKE_RATING_LESSONS,
  payload,
  success
});

export const createEvent = (event) => (dispatch) => {
  eventMock.create(event).then(({ data }) => {
    const newEvent = {
      ...data,
      start: new Date(data.start),
      end: new Date(data.end)
    };
    dispatch({ type: types.STUDENT_ATTENDANCE_CREATE_EVENT, event: newEvent });
    dispatch(popFullScreen());
  });
};

export const getEvents = () => (dispatch) => {
  eventMock.getAll().then((res) => {
    const fixedData = res.map((item) => ({
      ...item,
      start: new Date(item.start),
      end: new Date(item.end)
    }));
    dispatch({ type: types.STUDENT_ATTENDANCE_GET_EVENTS, events: fixedData });
  });
};

export const updateEvents = (events) => ({
  type: types.STUDENT_ATTENDANCE_UPDATE_EVENTS,
  events
});

export const updateEvent = (event) => ({
  type: types.STUDENT_ATTENDANCE_UPDATE_EVENT,
  event
});

export const getSingleEvent = (event) => ({
  type: types.STUDENT_ATTENDANCE_GET_EVENT,
  event
});

export const rescheduleLesson = (payload, success) => ({
  type: types.STUDENT_RESCHEDULE_LESSONS,
  payload,
  success
});

export const confirmReschedule = (payload, success) => ({
  type: types.STUDENT_RESCHEDULE_CONFIRM_LESSONS,
  payload,
  success
});

export const closeReschedule = (payload, success) => ({
  type: types.STUDENT_RESCHEDULE_CLOSE_LESSONS,
  payload,
  success
});
