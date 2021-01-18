import React from 'react';
import { MobileContainer, DesktopContainer, TabletContainer } from './style';
import { useWindowSize } from '../../hooks/use-window-size';
import * as devices from '../../constants/devices';

export default ({ children }) => {
  const { device } = useWindowSize();
  if (device === devices.MOBILE) return <MobileContainer>{children}</MobileContainer>;
  if (device === devices.TABLET) return <TabletContainer>{children}</TabletContainer>;
  if (device === devices.NOTEBOOK) return <DesktopContainer>{children}</DesktopContainer>;
  if (device === devices.DESKTOP) return <DesktopContainer>{children}</DesktopContainer>;
  return <></>;
};
