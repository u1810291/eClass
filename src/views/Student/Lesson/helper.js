/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHideModal } from '../../../hooks/modal';
import MeetingWindow from '../../../components/MeetingWindow';
import CancelLesson from '../../../components/Lesson/CancelLesson';
import Reschedule from '../../../components/Lesson/Reschedule';
import AddRating from '../../../components/Lesson/AddRating';
import {
  joinLesson,
  cancelLesson,
  rescheduleLesson,
  confirmReschedule,
  closeReschedule,
  addRating,
  revokeRating
} from '../../../redux/modules/student/lessons/actions';
import { getReasons } from '../../../redux/modules/lists/actions';

const cancelingLesson = (id) => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    reason: Yup.string().required('Required'),
    comment: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      reason: '',
      comment: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(cancelLesson({ id, values }, () => {
        hideModal();
      }));
      setSubmitting(false);
    }
  });
  const { reasons } = useSelector((state) => state.listsReducers);
  useEffect(() => {
    dispatch(getReasons());
  }, [getReasons]);

  return {
    reasons, formik
  };
};

export const reschedule = (id) => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    reason: Yup.string().required('Required'),
    comment: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      reason: '',
      comment: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const data = {
        reason: values.reason,
        comment: values.comment
      };
      dispatch(rescheduleLesson({ id, data }, () => {
        hideModal();
      }));
      setSubmitting(false);
    }
  });
  const { reasons } = useSelector((state) => state.listsReducers);
  useEffect(() => {
    dispatch(getReasons());
  }, [getReasons]);

  return {
    reasons, formik
  };
};

const addRate = (teacher_id, group_id) => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const validationSchema = Yup.object({
    stars: Yup.string().required('Required'),
    comment: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      stars: '',
      comment: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const data = {
        teacher: teacher_id,
        group: group_id,
        ...values
      };
      setSubmitting(true);
      dispatch(addRating(data, (res) => {
        if (res) {
          hideModal();
          setSubmitting(false);
        }
      }));
    }
  });
  return { formik };
};

export const toolTips = [
  {
    name: 'Join',
    icon: 'payment',
    onClick: (id, {
      dispatch, showBlured, student, students
    }) => {
      dispatch(joinLesson(id, (response) => {
        student(id);
        showBlured({
          title: 'Zoom Meeting',
          body: () => <MeetingWindow data={students} />
        });
        if (response) { alert('Lesson started!'); }
        return response;
      }));
    }
  },
  {
    name: 'Cancel',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Cancel lesson',
        body: () => <CancelLesson id={id} cancelingLesson={cancelingLesson} />
      });
    }
  },
  {
    name: 'Reschedule',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Reschedule lesson',
        body: () => <Reschedule id={id} rescheduleLesson={reschedule} />
      });
    }
  },
  {
    name: 'Reject Reschedule',
    icon: 'payment',
    onClick: (id, { dispatch }) => {
      dispatch(closeReschedule(id, (res) => { if (res) alert('Succesfully rejected'); }));
    }
  },
  {
    name: 'Confirm Reschedule',
    icon: 'payment',
    onClick: (id, { dispatch }) => {
      dispatch(confirmReschedule(id, (res) => { if (res) alert('Succesfully confirmed'); }));
    }
  },
  {
    name: 'Add Rating',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Reschedule lesson',
        body: () => <AddRating data={row.original} addRating={addRate} />
      });
    }
  },
  {
    name: 'Revoke Rating',
    icon: 'payment',
    onClick: (_, { row, dispatch }) => {
      dispatch(revokeRating({
        teacher_id: row.original.teacher.id,
        group_id: row.original.group.id
      }, (res) => { if (res) alert('Succesfully deleted'); }));
    }
  }
];
