/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const LinkCell = ({ data }) => {
  const history = useHistory();
  const { start_url } = data.link;

  return (
    <Container>
      <Content className={nameClass}>
        {start_url
          ? (
            <PrimaryButton title="Start lesson" onClick={() => history.push({ pathname: '/meeting', state: data })} />
          )
          : <Empty>Not started</Empty>}
      </Content>
    </Container>
  );
};
export default LinkCell;
