import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Icon, Breadcrumb, Footer } from 'antd';

const { Header, Sider, Content } = Layout;

class Navigation extends React.Component {
  render() {
    return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.Item key="Projects">Projects</Menu.Item>
        <Menu.Item key="Contact">Contact</Menu.Item>
      </Menu>
    </Header>
    );
  }
}

export default Navigation;
