/* eslint-disable no-alert */
import React, { useEffect } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import AddHomework from '../../../components/Lesson/AddHomework';
import CancelLesson from '../../../components/Lesson/CancelLesson';
import Reschedule from '../../../components/Lesson/Reschedule';
import { addHomework } from '../../../redux/modules/teacher/homeworks/actions';
import { addQuiz } from '../../../redux/modules/teacher/quizes/actions';
import {
  startLesson, cancelLesson, rescheduleLesson
} from '../../../redux/modules/teacher/lessons/actions';
import MeetingWindow from '../../../components/MeetingWindow';
import { getReasons } from '../../../redux/modules/lists/actions';
import { useHideModal } from '../../../hooks/modal';

const handleAdd = (id) => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    desc: Yup.string(),
    from_date: Yup.string().required('Required'),
    till_date: Yup.string().required('Required'),
    file: Yup.array().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      desc: '',
      from_date: '',
      till_date: '',
      file: []
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addHomework({ values, id }, (res) => {
        // eslint-disable-next-line no-alert
        if (res) {
          alert('Succesfully added!');
          hideModal();
        }
        if (!res) alert('Something went wrong!');
        return res;
      }));
    }
  });
  return { formik };
};

const handleAddQuiz = (id) => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    desc: Yup.string(),
    from_date: Yup.string().required('Required'),
    till_date: Yup.string().required('Required'),
    file: Yup.array().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      desc: '',
      from_date: '',
      till_date: '',
      file: []
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addQuiz({ values, id }, (res) => {
        // eslint-disable-next-line no-alert
        if (res) {
          alert('Succesfully added!');
          hideModal();
        }
        if (!res) alert('Something went wrong!');
        return res;
      }));
    }
  });
  return { formik };
};

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
      dispatch(cancelLesson({ id, reason: values }, () => {
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
    comment: Yup.string().required('Required'),
    new_date: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      reason: '',
      comment: '',
      new_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const data = {
        reason: values.reason,
        comment: values.comment,
        new_date: values.new_date.toISOString()
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
export const toolTips = [
  {
    name: 'Start',
    icon: 'payment',
    onClick: (id, {
      dispatch, showBlured, teacher, teachers
    }) => {
      dispatch(startLesson(id, (response) => {
        teacher(id);
        showBlured({
          title: 'Zoom Meeting',
          body: () => <MeetingWindow data={teachers} />
        });
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
    name: 'Add homework',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add homework',
        body: () => <AddHomework handleAdd={() => handleAdd(id)} />
      });
    }
  },

  {
    name: 'Add controlwork',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add Quiz',
        body: () => <AddHomework handleAdd={() => handleAddQuiz(id)} />
      });
    }
  }

];
