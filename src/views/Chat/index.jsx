/* eslint-disable camelcase */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../../components/Chat';
import { socket } from '../../hooks/socket';
import { getStudents } from '../../redux/modules/teacher/groups/actions';
import { fetchData } from '../../redux/modules/student/groups/actions';

export default () => {
  const [selected, setSelected] = useState(undefined);
  const [chats, setChats] = useState();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);
  const { data } = useSelector((state) => state.studentGroupsReducers);
  const { data: groupUsers } = useSelector((state) => state.teacherGroupsReducers);
  const chatElements = useMemo(() => setChats(data.map((el) => ({
    id: el.id,
    name: el.name,
    description: el.description,
    type: 'group'
  }))), [data]);
  const users = useMemo(() => setChats({
    ...chats,
    ...(groupUsers.map(({ first_name, ...el }) => ({ name: first_name, ...el })))
  }), [chatElements]);
  useEffect(() => {
    if (selected) dispatch(getStudents(selected));
  }, [selected]);
  useEffect(() => {
    dispatch(fetchData(userInfo.id));
  }, [userInfo.id]);
  console.log(chats);
  console.log(groupUsers);
  return (
    <Chat
      selected={selected}
      users={users}
      setSelected={setSelected}
      chats={chats}
    >
      {socket()}
    </Chat>
  );
};
