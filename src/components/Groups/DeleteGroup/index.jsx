import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './style';
import { deleteGroup } from '../../../redux/modules/admin/groups/actions';
import { PrimaryButton } from '../../Buttons';

export default ({ id }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteGroup(id));
  };
  return (
    <Container>
      Are you sure to delete this group?
      <PrimaryButton title="Delete" color="red" onClick={() => onDelete(id)} />
    </Container>
  );
};
