import React from 'react';
import { Input, Radio, Menu, Dropdown, Icon, Button, Select } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypeList, getFiltering } from '../../actions/projects';
import { tagColors } from '../../utils/projects';
import R from 'ramda';

const InputGroup = Input.Group;
const Option = Select.Option;


const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const InputGroupStyle = styled(InputGroup)`
  width: auto;
  min-width: 350px;
  display: flex;
  align-items: flex-start;
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

class Search extends React.Component {
  state = {
    searchOption: 'Title'
  }

  handleSelectFilter = (e) => {
    this.setState({ searchOption: e });
  }

  handleInputFilling = ({ target: { value } }) => {
    getFiltering(value, this.state.searchOption);
    console.log(value)
  }

  render() {
    return(
      <InputGroupStyle compact >
        <Select defaultValue="Title" size="large" style={{ width: '35%' }} onChange={this.handleSelectFilter} >
          <Option value="Tags">Tags</Option>
          <Option value="Title">Title</Option>
          <Option value="Content">Content</Option>
        </Select>
        {this.state.searchOption === 'Tags' &&
          <Select
            size="large"
            multiple
            style={{ width: '100%'}}
            placeholder="Select tag(s)"
            onChange={(e) => console.log(e)}
          >
            { R.map(tag => <Option key={tag} value={tag}>{tag}</Option>, R.keys(tagColors)) }
          </Select>
            ||
          <Input size="large" placeholder="Enter your filter" onChange={this.handleInputFilling} />
        }
      
      </InputGroupStyle>
    )
  }
}

export const Header = ({ getTypeList }) =>
  <Wrapper>
    <Radio.Group
      size="large"
      defaultValue="all"
      onChange={(e) => getTypeList(e.target.value)}
    >
      <Radio.Button key="all" value="all">All</Radio.Button>
      <Radio.Button key="C" value="C">C</Radio.Button>
      <Radio.Button key="Web" value="Web">Web</Radio.Button>
      <Radio.Button key="Python" value="Python">Python</Radio.Button>
      <Radio.Button key="Security" value="security">Security</Radio.Button>
    </Radio.Group>
    <Dropdown overlay={menu} trigger={['click']}>
      <Button size="large" href="#">
        Sort by <Icon type="down" />
      </Button>
    </Dropdown>
    <Search />
  </Wrapper>
;

const actions = { getTypeList, getFiltering };

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header, Search);
