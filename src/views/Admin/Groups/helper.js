/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  createLesson, addGroup, editGroup, addStudent
} from '../../../redux/modules/admin/groups/actions';
import { addSubject } from '../../../redux/modules/admin/subjects/actions';
import { fetchData } from '../../../redux/modules/admin/users/actions';
import { notify } from '../../../redux/modules/notifications/actions';
import {
  CreateLesson, EditGroup, DeleteGroup, AddStudent
} from '../../../components/Groups';
import { useHideModal } from '../../../hooks/modal';

const handleCreate = (id) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    start_date: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      start_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const data = { group: id, start_date: values.start_date.toISOString() };
      dispatch(createLesson(data, (res) => {
        if (res) {
          return alert('Succesfully added!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return { formik };
};

const handleEdit = (id) => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const validationSchema = Yup.object().shape({
    en_name: Yup.string().required('Required'),
    official_en_name: Yup.string().required('Required'),
    en_description: Yup.string(),
    ru_name: Yup.string().required('Required'),
    official_ru_name: Yup.string().required('Required'),
    ru_description: Yup.string(),
    uz_name: Yup.string().required('Required'),
    official_uz_name: Yup.string().required('Required'),
    uz_description: Yup.string(),
    group_lang: Yup.string(),
    salary_percent: Yup.number(),
    price: Yup.number(),
    price_with_discount: Yup.number(),
    lesson_duration: Yup.number(),
    teacher_id: Yup.string(),
    subject_id: Yup.string(),
    study_days: Yup.array().required('Required'),
    start_date: Yup.string(),
    finish_date: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      id,
      en_name: '',
      official_en_name: '',
      en_description: '',
      ru_name: '',
      official_ru_name: '',
      ru_description: '',
      uz_name: '',
      official_uz_name: '',
      uz_description: '',
      group_lang: '',
      salary_percent: '',
      price: '',
      price_with_discount: '',
      lesson_duration: '',
      teacher_id: '',
      subject_id: '',
      study_days: [],
      start_date: '',
      finish_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(editGroup(values, (success) => {
        hideModal();
        return success;
      }));
    }
  });
  return { formik };
};

const handleAddStudent = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData('student', 'size=10000'));
  }, [dispatch]);
  const { data, error } = useSelector((state) => state.adminUsersReducers);
  const students = data.map((el) => ({ id: el.id, value: el.full_name }));
  const validationSchema = Yup.object().shape({
    student_id: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      student_id: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      if (error) dispatch(notify({ message: error, icon: 'cross' }));
      const data = { id, student_id: values.student_id };
      dispatch(addStudent(data, (res) => {
        // eslint-disable-next-line no-alert
        if (res) {
          return notify({ message: 'Succesfully added!', icon: 'checkmark' });
        }
        return notify({ message: res, icon: 'cross' });
      }));
    }
  });
  return { formik, students };
};

export function subjectAddFormik() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    en_name: Yup.string().required('Required'),
    en_description: Yup.string().required('Required'),
    ru_name: Yup.string().required('Required'),
    ru_description: Yup.string().required('Required'),
    uz_name: Yup.string().required('Required'),
    uz_description: Yup.string().required('Required'),
    subject_lang: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      en_name: '',
      en_description: '',
      ru_name: '',
      ru_description: '',
      uz_name: '',
      uz_description: '',
      subject_lang: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addSubject(values, (success) => {
        // eslint-disable-next-line no-alert
        alert('Succesfully added');
        return success;
      }));
    }
  });
  return { formik };
}

export const groupAddFormik = () => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const validationSchema = Yup.object().shape({
    en_name: Yup.string().required('Required'),
    official_en_name: Yup.string().required('Required'),
    en_description: Yup.string(),
    ru_name: Yup.string().required('Required'),
    official_ru_name: Yup.string().required('Required'),
    ru_description: Yup.string(),
    uz_name: Yup.string().required('Required'),
    official_uz_name: Yup.string().required('Required'),
    uz_description: Yup.string(),
    group_lang: Yup.string(),
    salary_percent: Yup.number(),
    price: Yup.number(),
    price_with_discount: Yup.number(),
    lesson_duration: Yup.number(),
    teacher_id: Yup.string(),
    subject_id: Yup.string(),
    study_days: Yup.array().required('Required'),
    start_date: Yup.string().required('Required'),
    finish_date: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      en_name: '',
      official_en_name: '',
      en_description: '',
      ru_name: '',
      official_ru_name: '',
      ru_description: '',
      uz_name: '',
      official_uz_name: '',
      uz_description: '',
      group_lang: '',
      salary_percent: '',
      price: '',
      price_with_discount: '',
      lesson_duration: '',
      teacher_id: '',
      subject_id: '',
      study_days: [],
      start_date: '',
      finish_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addGroup(values, (success) => {
        hideModal();
        return success;
      }));
    }
  });

  return { formik };
};

export const toolTips = [
  {
    name: 'Create lesson',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Create Lesson',
        body: () => <CreateLesson handleCreate={() => handleCreate(id)} />
      });
    }
  },
  {
    name: 'Edit group',
    icon: 'payment',
    onClick: (id, { row, showBlured }) => {
      showBlured({
        title: 'Create Lesson',
        body: () => <EditGroup row={row.original} handleEdit={() => handleEdit(id)} />
      });
    }
  },
  {
    name: 'Delete group',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Delete group',
        body: () => <DeleteGroup id={id} />
      });
    }
  },
  {
    name: 'Add student',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add Student',
        body: () => <AddStudent handleAddStudent={() => handleAddStudent(id)} />
      });
    }
  },
  {
    name: 'Delete student',
    icon: 'payment',
    onClick: () => {
      alert('Delete student');
    }
  }
];
