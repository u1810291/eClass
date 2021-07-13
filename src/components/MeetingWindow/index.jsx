/* eslint-disable no-console */
import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './style';
import { PrimaryButton } from '../Buttons';

declare var ZoomMtg;

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

function MeetingWindow({ data }) {
  const userData = data();
  const { userInfo } = useSelector((state) => state.userReducer);
  const role = userInfo.role === 'TEACHER' ? 1 : 0;
  const apiKey = userData.api_key;
  const meetingNumber = userData.meeting_id;
  const leaveUrl = `${window.location.pathname}?ROLE=${role}&USERNAME=${userInfo.role}`;
  const userName = userInfo.username;
  const userEmail = userInfo.email;
  const passWord = userData.meeting_password;

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block';
    ZoomMtg.init({
      leaveUrl,
      isSupportAV: true,
      debug: false,
      success: () => {
        ZoomMtg.join({
          signature,
          meetingNumber,
          userName,
          apiKey,
          userEmail,
          passWord,
          success: (success) => success,
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  function getSignature(e) {
    e.preventDefault();
    startMeeting(userData.signature);
  }
  return (
    <Container>
      <PrimaryButton title="Join Meeting" type="button" onClick={getSignature} />
    </Container>
  );
}

export default MeetingWindow;
