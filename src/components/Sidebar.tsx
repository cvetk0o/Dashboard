/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { BookOutlined, PieChartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserRoleSelector } from '../store/auth/selectors';
import { Roles } from '../types/roles';

const { Sider } = Layout;

const StyledSidebar = styled(Sider)`
  &.ant-layout-sider {
    height: 100vh;
  }
`;

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'Arimo';
  font-weight: 700;
  color: white;
`;

const SiderDemo: React.FunctionComponent = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const userRole = useSelector(getUserRoleSelector);

  const onCollapse = (c: boolean) => {
    setCollapsed(c);
  };

  return (
    <StyledSidebar collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo>S</Logo>
      <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
        {userRole === Roles.ROOT && (
          <Menu.Item key="/departments" icon={<BookOutlined />}>
            <Link to="/departments" style={{ color: '#FFF' }}>
              Departments
            </Link>
          </Menu.Item>
        )}
        <Menu.Item key="/partDepartments" icon={<PieChartOutlined />}>
          <Link to="/partDepartments" style={{ color: '#FFF' }}>
            Part Departments
          </Link>
        </Menu.Item>
      </Menu>
    </StyledSidebar>
  );
};

export default SiderDemo;
