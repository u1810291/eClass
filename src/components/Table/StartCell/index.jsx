/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import { Route } from 'react-router-dom';

import classNames from 'classnames';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';
import MeetingWindow from '../../MeetingWindow';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const LinkCell = ({ start_url }) => {
  console.log(start_url);
  // const history = useHistory();
  return (
    <Container>
      <Content className={nameClass}>
        {start_url
          ? (
            <div>
              <PrimaryButton title="Start lesson" />
              <Route
                exact
                path="/zoom/meeting"
                component={MeetingWindow}
                props={start_url}
              />
            </div>

          )
          : <Empty>Not started</Empty>}
      </Content>
    </Container>
  );
};
export default LinkCell;
