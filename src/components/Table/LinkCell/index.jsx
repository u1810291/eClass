import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Container, Content, Empty } from './style';
import { PrimaryButton } from '../../Buttons';

const nameClass = classNames('body-medium', 'weight-medium', 'text-black-800');
const LinkCell = ({ join }) => {
  const history = useHistory();

  return (
    <Container>
      <Content className={nameClass}>
        {join
          ? (
            <PrimaryButton title="Join meeting" onClick={() => history.push(join)} />
          )
          : <Empty>Not started</Empty>}
      </Content>
    </Container>
  );
};
export default LinkCell;
