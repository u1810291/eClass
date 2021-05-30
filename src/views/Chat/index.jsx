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
  const stompClient = '';
  const send = () => {
    const send_message = 'hello !';
    if (stompClient && stompClient.connected) {
      const msg = { name: send_message };
      stompClient.send('/app/hello', JSON.stringify(msg), {});
    }
  };
  const connect = () => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
      socket = new SockJS('https://five-plus.co/ws', null, { Authorization: `Bearer ${token}` });
      const stompClient = Stomp.over(socket);
      stompClient.connect(
        (frame) => {
          console.log('frame', frame);
          connected = true;
          stompClient.subscribe('/topic/v1/notification', { Authorization: `Bearer ${token}` }, (tick) => {
            console.log(tick);
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
