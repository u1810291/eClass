/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

export function connect() {
  const { userInfo } = useSelector((state) => state.userReducer);
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
      socket = new SockJS('https://five-plus.co/ws');
      const stompClient = Stomp.over(socket);
      stompClient.connect({ Authorization: `Bearer ${token}` },
        (frame) => {
          connected = true;
          stompClient.subscribe(`/user/${userInfo.username}/v1/chat`, (tick) => {
            console.log('tick', JSON.parse(tick));
          }, { Authorization: `Bearer ${token}` });
          stompClient.subscribe(`/user/${userInfo.username}/v1/notification`, (tick) => {
            console.log('tick', JSON.parse(tick));
          }, { Authorization: `Bearer ${token}` });
          stompClient.subscribe('/topic/v1/chat', (tick) => {
            console.log('tick', JSON.parse(tick));
          }, { Authorization: `Bearer ${token}` });
        },
        (error) => {
          console.log(error);
          connected = false;
        });
    }
  };
  const disconnect = () => {
    if (stompClient) {
      stompClient.disconnect();
    }
    connected = false;
  };
  return connected ? disconnect() : connect();
}
