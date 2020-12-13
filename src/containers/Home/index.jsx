import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/modules/nav/actions";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.pathname.split("/");
    const pathTitle = path ? path[1] : "";
    const title = pathTitle.length
      ? `${pathTitle.charAt(0).toUpperCase()}${pathTitle.slice(
          1,
          pathTitle.length
        )}`
      : "";
    dispatch(setTitle(title));
  });

  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
