/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Topup from './Topup';
import {
  fetchTariffs, topUpStudent, deleteUser, restoreUser
} from '../../../redux/modules/admin/users/actions';
import DeleteUser from '../../../components/Users/DeleteUser';
import RestoreUser from '../../../components/Users/RestoreUser';
import { useHideModal } from '../../../hooks/modal';
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
  const { hideModal } = useHideModal();
  useEffect(() => {
    dispatch(fetchTariffs());
  }, [fetchTariffs]);

  const { tariffs } = useSelector((state) => state.adminUsersReducers);
  const validationSchema = Yup.object().shape({
    tariff: Yup.string(),
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
          hideModal();
          return alert('Succesfully added!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return { tariffs, formik };
};

const useDelete = (data) => {
  const dispatch = useDispatch();
  const { hideModal } = useHideModal();
  const [token, setToken] = useState();
  useEffect(() => {
    dispatch(deleteUser(data, (res) => setToken(res)), hideModal());
  }, [deleteUser]);
  return { token };
};

const useRestore = (info) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const { hideModal } = useHideModal();
  useEffect(() => {
    dispatch(restoreUser(info, (res) => setData(res)), hideModal());
  }, [restoreUser]);
  return { data };
};

export const adminToolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Confirm delete',
        body: () => <DeleteUser id={id} useDelete={useDelete} />
      });
    }
  },
  {
    name: 'Restore',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Restore user',
        body: () => <RestoreUser useRestore={useRestore} row={row} />
      });
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
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Confirm delete',
        body: () => <DeleteUser id={id} useDelete={useDelete} />
      });
    }
  },
  {
    name: 'Restore',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Restore user',
        body: () => <RestoreUser useRestore={useRestore} row={row} />
      });
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
        body: () => <DeleteUser id={id} useDelete={useDelete} />
      });
    }
  },
  {
    name: 'Restore',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Restore user',
        body: () => <RestoreUser useRestore={useRestore} row={row} />
      });
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
