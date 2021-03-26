/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';

import classNames from 'classnames';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';
import { useShowModal } from '../../../hooks/modal';
import MeetingWindow from '../../MeetingWindow';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const LinkCell = ({ data }) => {
  const { showFullScreen } = useShowModal();
  return (
    <Container>
      <Content className={nameClass}>
        {data.link && data.link.join_url
          ? (
            <PrimaryButton
              title="Join lesson"
              onClick={() => showFullScreen({ title: 'Join meeting', body: <MeetingWindow data={data} /> })}
            />
          )
          : <Empty>Not started</Empty>}
      </Content>
    </Container>
  );
};
export default LinkCell;
