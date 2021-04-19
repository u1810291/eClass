/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/modules/student/profile/actions';
import {
  UserDetails, Container, Content, Area, Text
} from './style';
import Form from './Form';
import Info from './Info';
import { TextArea } from '../../../components/Forms/Inputs';
import Spinner from '../../../components/Spinner';
import Error from '../../../components/Error';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { data, loading, error } = useSelector((state) => state.studentProfileReducers);
  console.log(loading);

  return (
    <Container>
      {loading
        ? (
          error
            ? (
              <>
                <UserDetails>
                  <Info data={data} />
                </UserDetails>
                <Content>
                  <Form title="Student" />
                  <Form title="Parent" />
                </Content>
                <Text>Дополнительная информация</Text>
                <Area>
                  <TextArea white />
                </Area>
              </>
            )
            : <Error />
        )
        : <Spinner contain black />}
    </Container>
  );
};
