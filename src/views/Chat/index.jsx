/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import Chat from '../../components/Chat';
import { connect } from '../../hooks/socket';

export default () => (<Chat>{connect()}</Chat>);
