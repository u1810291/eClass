/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Container, ZoomFrame } from './style';
import { PrimaryButton } from '../Buttons';
declare var ZoomMtg;

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

function MeetingWindow({ data }) {
  const teacherData = data();
  const apiKey = teacherData.api_key;
  const meetingNumber = teacherData.meeting_id;
  const leaveUrl = `${window.location.pathname}?ROLE=${1}&USERNAME=${'USERNAME'}`;
  const userName = 'Teacher';
  const userEmail = 'some@some.com';
  const passWord = teacherData.meeting_password;

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block';
    ZoomMtg.init({
      leaveUrl,
      isSupportAV: true,
      debug: false,
      success: (success) => {
        console.log(success);
        ZoomMtg.join({
          signature,
          meetingNumber,
          userName,
          apiKey,
          userEmail,
          passWord,
          success: (success) => {
            console.log(success);
          },
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
    startMeeting(teacherData.signature);
  }
  return (
    <Container>
      <h1>Welcome to zoom lesson</h1>
      <PrimaryButton title="Join Meeting" type="button" onClick={getSignature} />
    </Container>
  );
}

export default MeetingWindow;
