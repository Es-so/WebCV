import React from 'react';
import { Input, Radio } from 'antd';


export const Search = ({ onChange, filter, style = {} }) =>
  <Input.Search
    size="large"
    style={{ width: '50%'}}
    placeholder="Enter your filter ..."
  />
;

export const Header = () =>
  <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', marginBottom: '20px'}} >
    <Radio.Group defaultValue="all" style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-end'}} >
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="C">C</Radio.Button>
      <Radio.Button value="Web">Web</Radio.Button>
      <Radio.Button value="Python">Python</Radio.Button>
    </Radio.Group>
    <Search />
  </div>
;

export default Header;
