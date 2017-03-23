import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Progress } from 'antd';
import { home } from '../../utils/home';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const HeaderStyle = styled.div`
  width: 100%;
  background: whitesmoke;
  height: 350px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
`;

const LeftStripStyle = styled.div`
  width: 90%;
  color: white;
  height: 50px;
  padding: 10px;
  background: cadetblue;
  margin-left: -5%;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: whitesmoke;
  }
`;

const RightStripStyle = styled.div`
  width: 90%;
  color: white;
  text-align: right;
  height: 50px;
  padding: 10px;
  background: wheat;
  margin-right: -5%;
  &:hover {
  	color: black;
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

const AboutStyle = styled.div`
  margin-left: -5%;
  width: 80%;
  padding: 20px;
  margin-bottom: 10px;
`;

const SkillsStyle = styled.div`
  margin-right: -5%;
  width: 80%;
  height: 200px;
`;


const Header = () =>
  <HeaderStyle>
    <Title> HEAD </Title>
  </HeaderStyle>
;

class Home extends React.Component {
  state = {
    about: false,
    skill: false,
  }

  handleShow = (e) => {
   const obj = {};
   obj[e] = !this.state[e];
   this.setState({ ...obj });
  }

  render() {
  	console.log(home, home.skills)
    const LeftStrip = () =>
       <LeftStripStyle onClick={() => this.handleShow('about')}>
          <Title> About </Title>
       </LeftStripStyle>
    ;

    const RightStrip = () =>
      <div style={{  display: 'flex', flexFlow: 'column', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end', marginRight: '-5%' }}>
        <RightStripStyle onClick={() => this.handleShow('skill')}>
          <Title> Skills </Title>
        </RightStripStyle>
        <SkillsStyle style={{ display: this.state.skill ? 'block' : 'none' }}>
        { R.map((s) =>
          (
          	[
          	<Title>{s.langage}</Title>,
            <Progress key={s.langage} percent={s.grade} showInfo={false} status="active" />
            ]
          ), home.skills) }
        </SkillsStyle>
      </div>
    ;

    return (
      <Wrapper>
        <Header />
        <LeftStrip />
          <AboutStyle style={{ display: this.state.about ? 'block' : 'none' }}>
          { R.map((s) =>
          (
          	[
          	<Title>{s.langage}</Title>,
            <Progress style={{ boxShadow: '10px black' }} key={s.langage} percent={s.grade} showInfo={false} status="active" />
            ]
          ), home.skills) }
          </AboutStyle>

        <RightStrip />
      </Wrapper>
    )
  }
}

export default Home;
