import {DesktopView, NotebookView, TabletView, MobileView} from "./style";

import {useWindowSize} from "../../hooks/use-window-size";
import * as devices from "../../constants/devices";
export default ({child}) => {
  const {device} = useWindowSize();

  if (device === devices.DESKTOP) return <DesktopView>{child}</DesktopView>;
  if (device === devices.NOTEBOOK) return <NotebookView>{child}</NotebookView>;
  if (device === devices.TABLET) return <TabletView>{child}</TabletView>;
  if (device === devices.MOBILE) return <MobileView>{child}</MobileView>;
  return <></>;
};
