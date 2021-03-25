/* eslint-disable no-alert */
import React, { useEffect } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import AddHomework from '../../../components/Lesson/AddHomework';
import CancelLesson from '../../../components/Lesson/CancelLesson';
import { uploadFile } from '../../../redux/modules/files/actions';
import { startLesson, cancelLesson } from '../../../redux/modules/teacher/lessons/actions';
import MeetingWindow from '../../../components/MeetingWindow';
import { getReasons } from '../../../redux/modules/lists/actions';

const handleAdd = (id) => {
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
      type: 'HOME_WORK',
      file: []
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(uploadFile({ values, id }, (res) => {
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully added!');
        if (!res) alert('Something went wrong!');
        return res;
      }));
    }
  });
  return { formik };
};

const cancelingLesson = (id) => {
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
      console.log(values);
      setSubmitting(true);
      dispatch(cancelLesson({ id, reason: values }, (response) => {
        console.log(response);
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
    onClick: (id, { dispatch, showFullScreen }) => {
      dispatch(startLesson(id, (response) => {
        if (response) { alert('Lesson started!'); }
        showFullScreen({
          title: 'Zoom Meeting',
          body: () => <MeetingWindow data={id} />
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
    onClick: () => {
      alert('Reschedule');
    }
  },

  {
    name: 'Response',
    icon: 'payment',
    onClick: () => {
      alert('Response Reschedule');
    }
  },

  {
    name: 'Reject Reschedule',
    icon: 'payment',
    onClick: () => {
      alert('Reject Reschedule');
    }
  },

  {
    name: 'Add Rating',
    icon: 'payment',
    onClick: () => {
      alert('Add Rating');
    }
  },

  {
    name: 'Revoke Rating',
    icon: 'payment',
    onClick: () => {
      alert('Revoke Rating');
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
    onClick: (id) => {
      alert(`Revoke Rating ${id}`);
    }
  }

];
