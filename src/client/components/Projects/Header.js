import React from 'react';
import { Input, Radio, Menu, Dropdown, Icon, Button } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypeList } from '../../actions/projects';

const Wrapper = styled.div`
  display: flex;
  flexFlow: row wrap;
  justifyContent: space-around;
  marginBottom: 20px;
`;

export const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Alpha (default)</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="#">Most recent</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Project size</Menu.Item>
  </Menu>
);

export const Search = ({ onChange, filter, style = {} }) =>
  <Input.Search
    size="large"
    style={{ maxWidth: '40%'}}
    placeholder="Enter your filter ..."
  />
;

export const Header = ({ getTypeList }) =>
  <Wrapper>
    <Radio.Group size="large" defaultValue="all" onChange={(e) => getTypeList(e.target.value)} >
      <Radio.Button key="tt" value="all">All</Radio.Button>
      <Radio.Button key="ttt" value="C">C</Radio.Button>
      <Radio.Button key="ttr" value="Web">Web</Radio.Button>
      <Radio.Button key="ttd" value="Python">Python</Radio.Button>
    </Radio.Group>
    <Dropdown overlay={menu} trigger={['click']}>
      <Button href="#">
        Sort By <Icon type="down" />
      </Button>
    </Dropdown>
    <Search />
  </Wrapper>
;

const actions = { getTypeList };

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);

