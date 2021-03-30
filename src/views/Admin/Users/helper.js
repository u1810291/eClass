/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Topup from './Topup';
import { fetchTariffs, topUpStudent, deleteUser } from '../../../redux/modules/admin/users/actions';
import DeleteUser from '../../../components/Users/DeleteUser';
import {
  StudentEditUser,
  TeacherEditUser,
  AdmintEditUser
} from './EditUser';

export const options = [
  {
    id: 1,
    value: 'Student'
  }, {
    id: 2,
    value: 'Teacher'
  }, {
    id: 3,
    value: 'Admin'
  }
];

const useTopup = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTariffs());
  }, [fetchTariffs]);

  const { tariffs } = useSelector((state) => state.adminUsersReducers);
  const validationSchema = Yup.object().shape({
    tariff: Yup.string().required('Required'),
    amount: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      tariff: '',
      amount: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const data = { student: id, tariff: values.tariff, amount: values.amount };
      dispatch(topUpStudent(data, (res) => {
        if (res) {
          return alert('Succesfully added!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return { tariffs, formik };
};

const useDelete = (user, id) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  useEffect(() => {
    dispatch(deleteUser({ user, id }, (res) => setToken(res)));
  }, [deleteUser]);
  return { token };
};

export const adminToolTips = [
  {
    name: 'Cancel',
    icon: 'payment',
    onClick: () => {
      alert('Cancel');
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
    name: 'Edit',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Edit user',
        body: () => <AdmintEditUser id={id} />
      });
    }
  }
];

export const teacherToolTips = [
  {
    name: 'Cancel',
    icon: 'payment',
    onClick: () => {
      alert('Cancel');
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
    name: 'Edit',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Edit user',
        body: () => <TeacherEditUser id={id} />
      });
    }
  }

];

export const studentToolTips = [
  {
    name: 'Topup',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Top up student',
        body: () => <Topup useTopup={() => useTopup(id)} />
      });
    }
  },
  {
    name: 'Edit',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Edit user',
        body: () => <StudentEditUser id={id} />
      });
    }
  },
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Confirm delete',
        body: () => <DeleteUser useDelete={() => useDelete('student', id)} />
      });
    }
  },
  {
    name: 'Restore',
    icon: 'payment',
    onClick: () => {
      alert('Restore');
    }
  }
];

export function toolTips(userType) {
  if (userType == 1) {
    return { tooltips: studentToolTips };
  }
  if (userType == 2) {
    return { tooltips: teacherToolTips };
  }
  if (userType == 3) {
    return { tooltips: adminToolTips };
  }
  return { tooltips: null };
}
