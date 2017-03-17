import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Navigation extends React.Component {
  handleRedirect = (location = '/Projects') => window.location.replace(location);

  render() {
    return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}
        style={{ lineHeight: '64px' }}
        onClick={({ key }) => this.handleRedirect(key)}
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
