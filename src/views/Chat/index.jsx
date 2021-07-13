/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Chat from '../../components/Chat';
import { socket } from '../../hooks/socket';
import service from '../../services/chat';

export default () => {
  useEffect(() => {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    service.getDialogs({ from_date: new Date(), to_date: oneYearFromNow }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (<Chat>{socket()}</Chat>);
};
