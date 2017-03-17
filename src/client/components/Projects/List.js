import React from 'react';
import { Card, Icon, Tag } from 'antd';

const List = () =>
  <Card title="Project title" extra={<a style={{fontSize: '1.5em'}} href="#"><Icon type="github" /></a>} style={{ width: 300 }}>
    <p>markdown description here</p>
    <p>markdown description here</p>
    <p>markdown description here</p>
    <Tag color="blue">Techno</Tag>
    <div style={{float: 'right'}}>Try it!</div>
  </Card>
;

export default List;
