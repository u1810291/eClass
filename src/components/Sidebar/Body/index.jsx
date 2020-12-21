import React from "react";
import PropTypes from "prop-types";
import { Container, Space, ImageWrapper, Text } from "./style";
import Item from "../Item";
import { childRoutes } from "../../../routes/student-sidebar-elemets";
import url from "../../../assets/icons/logo3.svg";

export const SidebarBody = ({ collapsed }) => (
  <Container>
    <Space>
      <Text>Menu</Text>
    </Space>

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
