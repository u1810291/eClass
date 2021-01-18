import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Container, Space, Text
} from './style';
import Item from '../Item';
import { childRoutes } from '../../../routes/sidebar-routes';

const SidebarBody = ({ collapsed, userInfo }) => (
  <Container>
    <Space>
      <Text>Menu</Text>
    </Space>
    {childRoutes.map(
      ({
        title, icon, path, children, except, role
      }, index) => ((role.includes(userInfo.role) && !except) ? (
        <Item
          key={`${index + 1}`}
          title={title}
          icon={icon}
          path={path}
          collapsed={collapsed}
          elements={children}
        />
      ) : null)
    )}
  </Container>
);
SidebarBody.propTypes = {
  collapsed: PropTypes.bool
};

SidebarBody.defaultProps = {
  collapsed: false
};
export default ({ collapsed }) => {
  const { userInfo } = useSelector((state) => state.userReducer);
  return <SidebarBody collapsed={collapsed} userInfo={userInfo} />;
};
