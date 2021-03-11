import React from 'react';

import {
  Container, Body, TitleWrapper, Right
} from '../style';
import { PrimaryButton } from '../../Buttons';
import { useShowModal } from '../../../hooks/modal';
import AddSubject from '../../AddSubject';
import AddGroup from '../../Groups/AddGroup';

export default ({ addSubjectFormik, addGroupFormik }) => {
  const { showBlured } = useShowModal();
  return (
    <Container>
      <Body>
        <TitleWrapper>
          <TitleWrapper.Title>Groups</TitleWrapper.Title>
          <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
        </TitleWrapper>
        <Right>
          <PrimaryButton
            title="Add group"
            onClick={() => showBlured({
              title: 'Add group',
              body: () => <AddGroup addGroupFormik={addGroupFormik} />
            })}
          />
          <PrimaryButton
            title="Add subject"
            onClick={() => showBlured({
              title: 'Add subject',
              body: () => <AddSubject addSubjectFormik={addSubjectFormik} />
            })}
          />
        </Right>
      </Body>
    </Container>
  );
};
