import React, { PropTypes } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Header from '../Headers';
import routes, { defaultRoute } from '../../routes';

export const Content = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const App = ({ history,home, projects, contact }) => {
  const handleClick = (path) => history.push(`/${path}`);
  return(
    <div>
      <Header onClick={handleClick} />
      <Content style={{ marginTop: '80px' }}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Content>
      <img style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: '-1'}} src={"http://www.coalescentdesign.com/_img/footer_bg.jpg"} />
    </div>
  )
};

App.propTypes = {
  home: PropTypes.object,
  projects: PropTypes.object,
  contact: PropTypes.object,
};

const actions = {};
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
