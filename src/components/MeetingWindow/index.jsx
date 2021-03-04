/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
// import { PrimaryButton } from '../Buttons';

export default (data) => {
  // api_key: "daaFEhvXSqSsFSC0MN1vbQ"
  // join_url: "https://zoom.us/j/96291696304?pwd=V2xZU1dVRURvMjdwV0N0RHhEZjROZz09"
  // meeting_id: 96291696304
  // meeting_password: "613409"
  // signature: "ZGFhRkVodlhTcVNzRlNDME1OMXZiUS45NjI5MTY5NjMwNC4xNjE0NzM3NjYxOTM4LjEuUER5WW9aODdXWUtNQlhYeVFxL3UydkdkcC9SSFdtQWZoOWZ6Z1BEYjBXTT0="
  // start_url: "https://zoom.us/s/96291696304?zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJ4U0pDakVGV1FlU3FPUnh3aVlrNnF3IiwiaXNzIjoid2ViIiwic3R5IjoxMDAsIndjZCI6ImF3MSIsImNsdCI6MCwic3RrIjoiNzUyUGZCR0ZFbFVFMDNiQzVuai00QlVCU3pid2lWZkttZ2NqRGFuNUhYay5CZ1lnZGxkSGNHWmxOSE5uZFdoSFMxaHhRVUp6VGtSV1RsaFlOVkJZU1U0NWJEQkFPVGhpTkdFd09XWmxZbUU0WkdNelkyTTNaRFZqTnpRMVlXTmpZek0zTkRaak56WmpaVFJtTTJFNU9USTFOalkzT0dFeVlUY3pOekEzT0dReFlqY3hOUUFnU2k5QldXVjZWV2QwTDFGNVZqZHlXbFkwTURoS2RUSk1NR3RyZERsS2NtTUFBMkYzTVFBQUFYZjEzZFRoQUJKMUFBQUEiLCJleHAiOjE2MTQ3NDQ4OTEsImlhdCI6MTYxNDczNzY5MSwiYWlkIjoiSUN6a1MxZTlTNEtiMmEzdGo3T1MzZyIsImNpZCI6IiJ9.cIIf4JuYhEh3t67s82eT9saOTSndpfwp2hOimmAmDxo"

  ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();
  useEffect(() => {
    console.log(data);
  }, []);
  const API_KEY = 'daaFEhvXSqSsFSC0MN1vbQ';
  const meetConfig = {
    apiKey: API_KEY,
    meetingNumber: 96291696304,
    userName: 'username',
    passWord: '613409',
    signature: 'ZGFhRkVodlhTcVNzRlNDME1OMXZiUS45NjI5MTY5NjMwNC4xNjE0NzM3NjYxOTM4LjEuUER5WW9aODdXWUtNQlhYeVFxL3UydkdkcC9SSFdtQWZoOWZ6Z1BEYjBXTT0=',
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
        onClick={() => { console.log('object'); insideMeeting(); }}
      >
        Start
      </button>
      <div id="zmmtg-root" />
      <div id="aria-notify-area" />
      <div className="ReactModalPortal" />
      <div className="ReactModalPortal" />
      <div className="ReactModalPortal" />
      <div className="ReactModalPortal" />
      <div className="global-pop-up-box" />
      <div className="sharer-controlbar-container sharer-controlbar-container--hidden" />

    </Container>
  );
};
