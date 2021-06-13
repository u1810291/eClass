import React from 'react';

import { useHistory } from 'react-router-dom';
// import { fetchStudents } from '../../../views/Teacher/Groups/helper';

export default () => {
  const history = useHistory();
  // eslint-disable-next-line no-console
  console.log(history);
  // const data = fetchStudents('id');
  // console.log(data);
  return (
    <div>
      Students list
    </div>
  );
};
