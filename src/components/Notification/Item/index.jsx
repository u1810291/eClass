import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container, Wrapper, CloseButton, Time, Caption
} from './style';
import { DynamicImage as Image } from '../../DynamicImage';
import Icon from '../../Icon';
import { closeNotify } from '../../../redux/modules/notifications/actions';

const classname = classNames('border-primary', 'white-900', 'shadow-primary-3');
const header = classNames('body-large', 'text-black-800');
const username = classNames('weight-semibold');
const caption = classNames('button-large', 'text-black-400', 'weight-regular');

export default ({
  id, name, comment, action, image
}) => {
  const dispatch = useDispatch();

  return (
    <Container className={classname}>
      <div>
        <Image width="48" height="48" name="John Doe" imgSrc={image} />
      </div>
      <Wrapper>
        <div>
          <span className={header}>
            <span className={username}>{name}</span>
            {' '}
            {action}
          </span>
          <CloseButton onClick={() => dispatch(closeNotify(id))}><Icon icon="close" /></CloseButton>
        </div>
        <Caption className={caption}>{comment}</Caption>
        <Time className={caption}>{moment(new Date()).format('LT')}</Time>
      </Wrapper>
    </Container>
  );
};
