/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ZoomMtg } from '@zoomus/websdk';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import { teacherSign } from '../../redux/modules/lessons/actions';
// import { PrimaryButton } from '../Buttons';
ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
export default ({ data }) => {
  const dispatch = useDispatch();
  const { teacherData } = useSelector((state) => state.lessonReducer);
  useEffect(() => {
    dispatch(teacherSign(data));
  }, []);

  const apiKey = teacherData.api_key;
  const meetingNumber = teacherData.meeting_id;
  const leaveUrl = `${window.location.pathname}?ROLE=${1}&USERNAME=${'USERNAME'}`;
  const userName = 'Teacher';
  const userEmail = 'some@some.com';
  const passWord = 690579;

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block';
    ZoomMtg.init({
      leaveUrl,
      isSupportAV: true,
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
    startMeeting(teacherData);
  }
  return (
    <Container>

      <main>
        <h1>Zoom WebSDK Sample React</h1>

        <button type="button" onClick={getSignature}>Join Meeting</button>
      </main>

    </Container>
  );
};
