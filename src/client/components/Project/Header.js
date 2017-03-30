import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { titleStyle } from '../../utils/projects';

const HeaderStyle = styled.div`
  background: whitesmoke;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items:center;
  font-size: 1.5em;
  padding: 5px;
`;

const Title = styled.h2`
  margin-right: auto;
  margin-left: auto;
`;

const Header = ({ project, history: { push } }) =>
  <HeaderStyle style={{ color: `${titleStyle[project.categorie].color}` }} >
    <Icon style={{ fontSize: '1.5em' }} type={ titleStyle[project.categorie].icon } />
    
    <Title > { project.title } </Title>
    
    <Button type="primary" onClick={() => push('/projects')} ghost>
      Go back <Icon type="left" />
    </Button>
  </HeaderStyle>
;

Header.propTypes = {
  project: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Header;
