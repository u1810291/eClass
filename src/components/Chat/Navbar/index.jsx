import React, { useState } from 'react';
import { DynamicImage } from '../../DynamicImage';
import Switch from '../../Forms/Switch';
import Icon from '../../Icon';
import {
  Container, UserInfo, ActionBar, UserDetails
} from './style';

export default () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Container>
      <UserInfo>
        <DynamicImage name="Avian Rizky" />
        <UserDetails>

          Avian Rizky online
        </UserDetails>
      </UserInfo>
      <ActionBar>
        {isOn ? 'Unmute' : 'Mute'}
        <Switch
          isOn={isOn}
          white
          id="test"
          handleToggle={() => setIsOn((prevState) => !prevState)}
        />
        <Icon icon="video-materials" />
        <Icon icon="connection" />
      </ActionBar>
    </Container>
  );
};
