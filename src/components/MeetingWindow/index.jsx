/* eslint-disable no-alert */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import { useHistory } from 'react-router-dom';
import { Container } from './style';

const leaveUrl = '/';
export default (props) => {
  const history = useHistory();
  const { location: { state: { rest } } } = props;
  console.log(rest);
  const password = rest.meeting_password;
  const meetingNumber = rest.meeting_id;
  const username = rest.teacher.name;
  const role = 1;
  if (!password || !meetingNumber || !username || !role) {
    alert(
      'There\'s no valid arguments to join a meeting. Redirecting to home..'
    );
    history.push('/');
  }

  document.title = 'Joining...';

  function joinMeeting(config) {
    ZoomMtg.init({
      isSupportAV: true,
      leaveUrl,
      success: (success) => {
        console.log('Init success', success);
        ZoomMtg.join({
          meetingNumber: config.meetingNumber,
          signature: config.signature,
          passWord: config.password,
          apiKey: config.apiKey,
          userName: config.username,
          success: (s) => {
            document.title = 'Video call: Joined';
            console.log('JoinMeeting success', s);
          },
          error: (e) => {
            document.title = 'Error joining';
            console.log('Error:ZoomMtg.join()', e);
            alert('check the log');
          }
        });
      },
      error: (e) => {
        console.log('Error:ZoomMtg.init()', e);
        alert('check the log');
      }
    });
  }

  function startMeeting(data) {
    const role = 1;
    document.getElementById('zmmtg-root').style.display = 'block';

    const config = {
      signature: data.signature,
      apiKey: data.apiKey,
      meetingNumber: data.meetingNumber,
      role,
      password,
      username
    };
    joinMeeting(config);
  }

  useEffect(() => {
    ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/1.8.5/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    startMeeting(props);
  }, []);

  return (
    <Container>
      <main>
        <h1>Zoom WebSDK Sample React</h1>
        <div id="zmmtg-root" />
        <div id="aria-notify-area" />
      </main>
    </Container>
  );
};
