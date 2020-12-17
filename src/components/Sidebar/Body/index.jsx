import React from "react";
import PropTypes from "prop-types";
import { Container, Space } from "./style";
import Item from "../Item";
import { childRoutes } from "../../../routes/sidebar-elemets";
import logo from "../../../assets/icons/logo3.svg";

export const SidebarBody = ({ collapsed }) => (
  <Container>
    <img src={logo} />
    <Space />
    {childRoutes.map(
      ({ title, icon, path, children, except }, index) =>
        !except && (
          <Item
            key={`${index + 1}`}
            title={title}
            icon={icon}
            path={path}
            collapsed={collapsed}
            elements={children}
          />
        )
    )}
  </Container>
);

SidebarBody.propTypes = {
  collapsed: PropTypes.bool,
};

SidebarBody.defaultProps = {
  collapsed: false,
};

export default SidebarBody;
