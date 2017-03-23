import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Card, Icon, Tag, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { loadProjects, getTypeList } from '../../actions/projects';
import { getWichProjects } from '../../selectors/projects';
import { tagColors, titleStyle } from '../../utils/projects';

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

const ButtonTryStyle = styled(Button)`
  float: right;
  background: yellow;
  color: crimson;
`;

const Footer = ({ tags, tryIt }) =>
  <FooterStyle>
  {
  	R.map(tag => (<Tag key={tag} color={tagColors[tag]}>{tag}</Tag>) , tags)
  }
  { tryIt ?
    <ButtonTryStyle size="small">Try it!</ButtonTryStyle>
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
  handleSheet = ({ categorie, title, id}) => {
    const { history: { push } } = this.props;
    push(`/projects/${categorie}/${title}/${id}`);
  }

  render() {
    const { projects } = this.props;
    if (!projects) return null;
    console.log("======>", this.props)
    return(
      <Wrapper>
        {
        R.map((project) => 
          (<Card
            key={project.id}
            title={
              (
                <div style={{ color: titleStyle[project.categorie].color }}>
                  {project.title}
                </div>
              )
            }
            extra={
              <a style={{fontSize: '1.5em'}} href="#">
                <Icon type="github" onClick={(e) => console.log(e)} />
              </a>
            }
            style={{ width: 350, margin: '10px' }}
          >

            <Button size="small" style={{ float: 'right', marginTop: '-20px' }} onClick={() => this.handleSheet(project)} > Tech sheet </Button>

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
  typeProject: state.projects.typeProject,
  filter: state.projects.filter,
  sort: state.projects.sort,
  option: state.projects.option,
  tags: state.projects.tags,
  projects: getWichProjects(state),
});

const actions = { loadProjects };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
