import React from "react";
import { Container } from "./style";
export default ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};
