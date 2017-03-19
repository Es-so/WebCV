import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Card, Icon, Tag, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProjects, getTypeList } from '../../actions/projects';
import { getAllProjects } from '../../selectors/projects';
import { tagColors } from '../../utils/projects';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const FooterStyle = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  padding: 10px;
`;

const Footer = ({ tags }) =>
  <FooterStyle>
  {
  	R.map(tag => (<Tag key={tag} color={tagColors[tag]}>{tag}</Tag>) , tags)
  }
    <Button size="small" style={{float: 'right', background: 'whitesmoke'}}>Try it!</Button>
  </FooterStyle>
;

class List extends React.Component {
  componentWillMount() {
    const { loadProjects } = this.props;
    loadProjects();
  }
  render() {
    const { projects, type } = this.props;
    if (!projects) return null;
    console.log('projects ===>', projects, 'type ===>', type)
    console.log('this.props ==>', this.props);
    return(
      <Wrapper>
    {
      R.map((project) => 
        (<Card
          key={project.id}
          title={project.name}
          extra={
            <a style={{fontSize: '1.5em'}} href="#">
              <Icon type="github" onClick={() => console.log(type)} />
            </a>
          }
          style={{ width: 350, margin: '10px' }}
        >
          <p style={{ marginBottom: '20px' }} >{project.description}</p>
          <Footer tags={project.tags} />
        </Card>)
      ,projects)
    }
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  projects: getAllProjects(state),
  type: state.projects.type,
  filter: state.projects.filter,
  sort: state.projects.sort,
});

const actions = { loadProjects };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
