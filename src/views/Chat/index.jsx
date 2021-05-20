/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';

import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import Chat from '../../components/Chat';

export default () => {
  let connected = false;
  let socket = '';
  let stompClient = '';
  const send = () => {
    const send_message = 'hello !';
    if (stompClient && stompClient.connected) {
      const msg = { name: send_message };
      stompClient.send('/app/hello', JSON.stringify(msg), {});
    }
  };
  const connect = () => {
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token')) {
      socket = new SockJS('https://five-plus.co/ws', null, { headers: { 'X-Authorization': `Bearer ${sessionStorage.getItem('access_token')}` } });
      stompClient = Stomp.over(socket);
      stompClient.connect(
        { 'X-Authorization': `Bearer ${sessionStorage.getItem('access_token')}` },
        (frame) => {
          connected = true;
          stompClient.subscribe('/topic/v1/notification', (tick) => {
          });
        },
        (error) => {
          console.log(error);
          connected = false;
        }
      );
    }
  };
  const disconnect = () => {
    if (stompClient) {
      stompClient.disconnect();
    }
    connected = false;
  };
  const tickleConnection = () => (connected ? disconnect() : connect());
  return (<Chat>{tickleConnection()}</Chat>);
};
