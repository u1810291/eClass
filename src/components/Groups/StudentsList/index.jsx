import React from 'react';

import {
  Container
} from './style';
import GroupInfo from './GroupInfo';
import StudentsList from './Students';

export default ({ data, group, deleteStudent }) => (
  <Container>
    {group && <GroupInfo data={group} />}
    <StudentsList data={data} deleteStudent={deleteStudent} group_id={group && group.id} />
  </Container>
);
