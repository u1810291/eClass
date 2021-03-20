/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import { fetchData } from '../../redux/modules/lessons/actions';
// import { PrimaryButton } from '../Buttons';

export default ({ data }) => {
  const [open, setOpen] = useState(false);
  ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();
  useEffect(() => {
    console.log(data);
  }, []);
  const API_KEY = 'daaFEhvXSqSsFSC0MN1vbQ';
  const meetConfig = {
    apiKey: API_KEY,
    meetingNumber: 94808742103,
    userName: 'username',
    passWord: '009746',
    signature: 'ZGFhRkVodlhTcVNzRlNDME1OMXZiUS45NDgwODc0MjEwMy4xNjE0OTExMjkxNjcyLjEuWlc3dEN3eGFoMDNLdlJpVExqQ1VHZ0g1cVpxSXVua0tnM3VtUVk1SFRSRT0=',
    leaveUrl: 'https://five-plus.co/api/v1/teacher/lessons/4712f7a6-2c03-4c3a-b0a8-4d9d28ae85e3/finish',
    role: 1
  };
  const insideMeeting = () => new Promise((resolve, reject) => {
    ZoomMtg.init({
      debug: true,
      leaveUrl: '/meeting',
      isSupportAV: true,
      showMeetingHeader: true,
      disableInvite: true,
      disableCallOut: false,
      disableRecord: false,
      disableJoinAudio: false,
      audioPanelAlwaysOpen: true,
      showPureSharingContent: true,
      isSupportChat: true,
      isSupportQA: true,
      isSupportPolling: true,
      isSupportBreakout: true,
      isSupportCC: true,
      screenShare: true,
      rwcBackup: '',
      videoDrag: true,
      sharingMode: 'both',
      videoHeader: true,
      isLockBottom: true,
      isSupportNonverbal: true,
      isShowJoiningErrorDialog: true,
      success: () => {
        console.log('inside');
        ZoomMtg.join({

          apiKey: meetConfig.apiKey,
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          // password optional; set by Host
          passWord: meetConfig.passWord,
          signature: meetConfig.signature,

          // meetingNumber: meetConfig.meetingNumber,
          // userName: meetConfig.userName,
          // apiKey: meetConfig.apiKey,
          // userEmail: 'email@gmail.com',
          // passWord: meetConfig.passWord,
          success: () => {
            console.log('join meeting success');
            resolve(meetConfig.signature);
          },
          error: (res) => {
            reject(meetConfig.signature);
            console.log(res);
          }
        });
      },
      error: (res) => {
        console.log(res);
      }
    });
  });
  return (
    <Container>
      <h1>Zoom WebSDK Sample React</h1>
      <button
        type="button"
        style={{
          height: '20px', width: '50px', border: 'solid 1px black', background: 'green'
        }}
        onClick={() => { console.log('object'); insideMeeting(); setOpen(true); }}
      >
        Start
      </button>
      <div id="zmmtg-root" style={{ display: open ? 'flex' : 'none' }} />
      <div id="aria-notify-area" />

    </Container>
  );
};
