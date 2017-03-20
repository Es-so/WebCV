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

const Footer = ({ tags, tryIt }) =>
  <FooterStyle>
  {
  	R.map(tag => (<Tag key={tag} color={tagColors[tag]}>{tag}</Tag>) , tags)
  }
  { tryIt ?
    <Button size="small" style={{float: 'right', background: 'whitesmoke'}}>Try it!</Button>
    :
    null
  }
  </FooterStyle>
;

class List extends React.Component {
  componentWillMount() {
    const { loadProjects } = this.props;
    loadProjects();
  }
  render() {
    const { projects } = this.props;
    if (!projects) return null;
    return(
      <Wrapper>
      {
        R.map((project) => 
          (<Card
            key={project.id}
            title={project.title}
            extra={
              <a style={{fontSize: '1.5em'}} href="#">
                <Icon type="github" onClick={(e) => console.log(e)} />
              </a>
            }
            style={{ width: 350, margin: '10px' }}
          >
            <p style={{ marginBottom: '20px' }} >{project.content}</p>
            <Footer tags={project.tags} tryIt={project.tryIt} />
          </Card>)
      ,projects)
    }
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  projects: getAllProjects(state),
  typeProject: state.projects.typeProject,
  filter: state.projects.filter,
  sort: state.projects.sort,
  option: state.projects.option,
  tags: state.projects.tags,
});

const actions = { loadProjects };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
