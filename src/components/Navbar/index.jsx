import React from 'react';
import TabletDesktop from './TabletDesktop';
import Mobile from './Mobile';
import { useWindowSize } from '../../hooks/use-window-size';
import * as devices from '../../constants/devices';
import { socket } from '../../hooks/socket';

export default () => {
  socket();
  const { device } = useWindowSize();
  if (device === devices.MOBILE) return <Mobile />;
  if (device === devices.TABLET) return <TabletDesktop />;
  if (device === devices.NOTEBOOK) return <TabletDesktop />;
  if (device === devices.DESKTOP) return <TabletDesktop />;
  return <></>;
};
