import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./style";

const PrimaryButton = ({}) => <Container></Container>;

PrimaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};
PrimaryButton.defaultProps = {
  title: "",
  size: "medium",
};
