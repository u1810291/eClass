import React from 'react';
import { DesktopSidebar, TabletSidebar, MobileSidebar } from './style';
import { useWindowSize } from '../../../hooks/use-window-size';
import * as devices from '../../../constants/devices';

export default ({ collapsed, children }) => {
  const { device } = useWindowSize();
  if (device === devices.MOBILE) return <MobileSidebar className="shadow-primary-4" collapsed={collapsed}>{children}</MobileSidebar>;
  if (device === devices.TABLET) return <TabletSidebar className="shadow-primary-4" collapsed={collapsed}>{children}</TabletSidebar>;
  if (device === devices.DESKTOP) return <DesktopSidebar className="shadow-primary-4" collapsed={collapsed}>{children}</DesktopSidebar>;
  return <></>;
};
