import React from 'react';

import {
  Container, Body, TitleWrapper, Right
} from '../style';
import { PrimaryButton } from '../../Buttons';
import { useShowModal } from '../../../hooks/modal';
import AddSubject from '../../AddSubject';
import AddGroup from '../../../views/Admin/Groups/AddGroup';

export default ({ useFomrHandler }) => {
  const { showBlured } = useShowModal();
  const { formik, formValues, setFormValues } = useFomrHandler();
  const handleOnAddProduct = () => {
    const nextId = formValues.length + 1;
    setformValues((prevState) => [
      ...prevState,
      {
        [`name${nextId}`]: '',
        [`lang${nextId}`]: '',
        [`description${nextId}`]: ''
      }
    ]);
    formik.setValues({
      ...formik.values,
      ...{
        [`pname${nextId}`]: '',
        [`quantity${nextId}`]: '',
        [`price${nextId}`]: '',
        [`note${nextId}`]: '',
        [`weight${nextId}`]: '',
        [`weighttype${nextId}`]: '',
        [`file${nextId}`]: ''
      }
    });
  };
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
              body: () => <AddGroup />
            })}
          />
          <PrimaryButton
            title="Add subject"
            onClick={() => showBlured({
              title: 'Add subject',
              body: () => <AddSubject />
            })}
          />
        </Right>
      </Body>
    </Container>
  );
};
