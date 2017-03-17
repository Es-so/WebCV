import React from 'react';
import { Card, Icon, Tag, Button } from 'antd';

const Footer = () =>
  <div width={100}>
    <Tag color="blue">Techno</Tag>
    <Button size="small" style={{float: 'right'}}>Try it!</Button>
  </div>
;

const List = () =>
  <Card title="Project title" extra={<a style={{fontSize: '1.5em'}} href="#"><Icon type="github" /></a>} style={{ width: 300 }}>
    <p>markdown description here</p>
    <p>markdown description here</p>
    <p>markdown description here</p>
    <Footer />
  </Card>
;

export default List;
