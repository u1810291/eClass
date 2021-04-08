import React from 'react';

export default ({ id, useUpdateForm }) => {
  const { formik } = useUpdateForm(id);
  console.log(formik);
  return (
    <div>
      Update tariff
    </div>
  );
};
