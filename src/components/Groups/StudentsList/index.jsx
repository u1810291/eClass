import React from 'react';

import {
  Container
} from './style';
import GroupInfo from './GroupInfo';
import StudentsList from './Students';

export default ({ data, group }) => (
  <Container>
    <GroupInfo data={group} />
    <StudentsList data={data} />
  </Container>
);
