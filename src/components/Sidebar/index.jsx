import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import { BodyContainer } from "./style";
import {
  collapse,
  expand,
  setValue,
} from "../../redux/modules/sidebar/actions";
import { useWindowSize } from "../../hooks/use-window-size";
import ContainerLayout from "./Wrapper";
import { DESKTOP, MOBILE } from "../../constants/devices";

export default () => {
  const { device } = useWindowSize();
  const collapsed = useSelector(
    ({ sidebarReducer }) => sidebarReducer.collapsed
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue(device !== DESKTOP));
  }, [device, dispatch]);

  return (
    <ContainerLayout collapsed={collapsed}>
      <Header
        collapsed={collapsed}
        handleCollapse={() => dispatch(collapse())}
        handleExpand={() => dispatch(expand())}
      />
      <BodyContainer>
        <Body collapsed={device !== MOBILE && collapsed} />
      </BodyContainer>
    </ContainerLayout>
  );
};
