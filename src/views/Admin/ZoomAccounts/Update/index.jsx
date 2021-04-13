import React from 'react';

export default ({ id, useUpdateForm }) => {
  const { formik } = useUpdateForm(id);
  // eslint-disable-next-line no-console
  console.log(formik);
  return (
    <div>
      Update tariff
    </div>
  );
};
