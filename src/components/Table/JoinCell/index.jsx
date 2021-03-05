/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const LinkCell = ({ data }) => {
  // eslint-disable-next-line no-console
  const { join_url } = data.link;
  const history = useHistory();
  return (
    <Container>
      <Content className={nameClass}>
        {join_url
          ? (
            <PrimaryButton title="Join lesson" onClick={() => history.push({ pathname: '/meeting', state: data })} />
          )
          : <Empty>Not started</Empty>}
      </Content>
    </Container>
  );
};
export default LinkCell;
