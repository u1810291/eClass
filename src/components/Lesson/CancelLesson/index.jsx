import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './style';
import { cancelLesson } from '../../../redux/modules/teacher/lessons/actions';
import { PrimaryButton } from '../../Buttons';

const CancelLesson = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      Are you sure to cancel this lesson
      {' '}
      {id}
      ?
      <PrimaryButton title="delete" color="" onClick={() => dispatch(cancelLesson(id))} />
    </Container>
  );
};
export default CancelLesson;
