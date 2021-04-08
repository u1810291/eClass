import React from 'react';

import { useDispatch } from 'react-redux';

export default (props) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div>
      Delete
    </div>
  );
};
