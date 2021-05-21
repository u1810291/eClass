import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client'; // Note this line
import Stomp from 'stompjs';
import { useSelector } from 'react-redux';
import Chat from '../../components/Chat';
// import chat from '../../services/chat';

export default () => {
  const [state, setState] = useState('');
  const jwt = localStorage.getItem('access_token');
  const { userInfo } = useSelector((state) => state.userReducer);
  function ChatScreen() {
    useEffect(() => {
      const socket = new SockJS('https://five-plus.co/ws');
      const stompClient = Stomp.over(socket);
      const headers = { Authorization: `Bearer ${jwt}` };
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/user/${userInfo.username}/v1/notification`, console.log, headers
        );
      });
      return () => stompClient && stompClient.disconnect();
    }, [jwt, userInfo.username]);
  }
  return (<Chat state={state} setState={setState}>{ChatScreen()}</Chat>);
};
