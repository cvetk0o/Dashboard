/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';

const { Header } = Layout;
const HeaderWrapper = styled.div`
  overflow: auto;
  .ant-dropdown-trigger {
    margin-top: 10px;
    float: right;
  }
`;

const menu = (logout: () => void) => {
  return (
    <Menu>
      <Menu.Item key="2">
        <div onClick={logout}>Logout</div>
      </Menu.Item>
    </Menu>
  );
};

const Topbar: React.FunctionComponent = () => {
  const { logout } = React.useContext(AuthContext);

  return (
    <HeaderWrapper>
      <Header>
        <Dropdown overlay={menu(logout)}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </Header>
    </HeaderWrapper>
  );
};

export default Topbar;
