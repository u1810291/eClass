/* eslint-disable no-console */
import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import { Container } from './style';

export default ({
  username = 'teacher2', apiKey = 'daaFEhvXSqSsFSC0MN1vbQ'
}) => {
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();
  const insideMeeting = () => {
    const API_KEY = apiKey;
    const API_SECRET = 'https://zoom.us/s/99565987572?zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJ4U0pDakVGV1FlU3FPUnh3aVlrNnF3IiwiaXNzIjoid2ViIiwic3R5IjoxMDAsIndjZCI6ImF3MSIsImNsdCI6MCwic3RrIjoia3VNYVVaendDSl9pdV9PUUxwbG95cUhDaG5xQm1acVpTMlZoc2ZuV3ZZay5CZ1lnZGxkSGNHWmxOSE5uZFdoSFMxaHhRVUp6VGtSV1RsaFlOVkJZU1U0NWJEQkFPVGhpTkdFd09XWmxZbUU0WkdNelkyTTNaRFZqTnpRMVlXTmpZek0zTkRaak56WmpaVFJtTTJFNU9USTFOalkzT0dFeVlUY3pOekEzT0dReFlqY3hOUUFnU2k5QldXVjZWV2QwTDFGNVZqZHlXbFkwTURoS2RUSk1NR3RyZERsS2NtTUFBMkYzTVFBQUFYZkJCUDd0QUJKMUFBQUEiLCJleHAiOjE2MTM4NTgyNjYsImlhdCI6MTYxMzg1MTA2NiwiYWlkIjoiSUN6a1MxZTlTNEtiMmEzdGo3T1MzZyIsImNpZCI6IiJ9.pZIxPHpHpk21WwccVlf2FsSddneR48-vb-OqKpNZZXc';
    const meetConfig = {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      meetingNumber: 99565987572,
      userName: username,
      passWord: '',
      leaveUrl: 'https://five-plus.co/api/v1/teacher/lessons/4712f7a6-2c03-4c3a-b0a8-4d9d28ae85e3/finish',
      role: 0
    };
    ZoomMtg.init({
      leaveUrl: '/meeting',
      isSupportAV: true,
      success() {
        ZoomMtg.join(
          {
            meetingNumber: meetConfig.meetingNumber,
            userName: meetConfig.userName,
            signature: 'ZGFhRkVodlhTcVNzRlNDME1OMXZiUS45OTU2NTk4NzU3Mi4xNjEzODUxMDM2MTQ2LjEuSkxJa1lsamhSWFQ5dS9HSjFPUkxlRVFXZmZObC9GeHFpY0J2ZGJVZUN6Yz0=',
            apiKey: meetConfig.apiKey,
            userEmail: 'email@gmail.com',
            passWord: meetConfig.passWord,
            success() {
              console.log('join meeting success');
            },
            error(res) {
              console.log(res);
            }
          }
        );
      },
      error(res) {
        console.log(res);
      }
    });
  };
  return (
    <Container>
      <main>
        <h1>Zoom WebSDK Sample React</h1>
        <button type="button" onClick={insideMeeting}>Inside</button>
        <div id="zmmtg-root" />
        <div id="aria-notify-area" />
      </main>
    </Container>
  );
};
