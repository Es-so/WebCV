import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;

class Navigation extends React.Component {

  handleRedirect = (key) => this.props.onClick(key);

  render() {
    return (
    <Header style={{ position: 'fixed', width: '100%', top: '0', zIndex: 100 }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}
        style={{ lineHeight: '64px' }}
        onClick={({ key }) => this.handleRedirect(key)}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
      <div style={{
        float: 'right',
        fontSize: '2em',
        position: 'fixed',
        top: 0,
        right: 15,
        color: 'white'
      }}> Website in progress...</div>
    </Header>
    );
  }
}

export default withRouter(Navigation);
