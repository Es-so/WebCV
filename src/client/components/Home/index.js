import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Progress, Tag, Button, icon } from 'antd';
import { home } from '../../utils/home';
import ReactMarkdown from 'react-markdown';
import Header from './Header'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Title = styled.h2`
`;

const LeftStripStyle = styled.div`
  width: 90%;
  color: white;
  height: 50px;
  padding: 10px;
  background-image:linear-gradient(left, #00a8cb, white);
  border-radius: 0 10px 10px 0;
  margin-left: -5%;
  &:hover {
    cursor: pointer;
    color: #00a8cb;
    background-image:linear-gradient(right, #00a8cb, white) !important;
  }
`;

const WrapperRightStyle = styled.div`
  display: flex;
  flexFlow: column;
  alignItems: flex-end;
  width: 100%;
  justifyContent: flex-end;
  marginRight: -5%;
`;

const RightStripStyle = styled.div`
  width: 90%;
  color: white;
  text-align: right;
  height: 50px;
  margin-top: 40px;
  padding: 10px;
  background-image:linear-gradient(right, #002f65, white);
  border-radius: 10px 0 0 10px;
  margin-right: -5%;
  &:hover {
  	color: #002f65;
    cursor: pointer;
    background-image:linear-gradient(left, #002f65, white) !important;
  }
`;

const SkillStyle = styled.div`
  margin-left: -5%;
  width: 80%;
  padding: 20px;
  margin-bottom: 10px;
  background-image:linear-gradient(left, white, rgba(255,0,0,0));
  font-size: 0.7em;
`;

const AboutStyle = styled.div`
background-image:linear-gradient(right, white, rgba(255,0,0,0));
  justify-content: flex-end;
  margin-right: -5%;
  width: 80%;
`;

const FieldTitle = styled.h3`
  display: inline;
`;

const ButtonStyle = styled(Button)`
  width: 60%;
  minWidth: 500px;
  marginBottom: 40px;
  marginLeft: auto;
  marginRight: auto;
  height: 50px;
`;

const AboutFormat = (field, answer) =>
  <div key={field} style={{ background: 'whitesmoke', margin: '10px' }} >
    <FieldTitle>{field}:</FieldTitle> {answer}
  </div>
;

const HobbiesStyle = styled.div`
  margin: 10px;
  background: whitesmoke;
  paddingBottom: 10px';
`;

const Hobbies = (tags) =>
  <HobbiesStyle key={tags}>
    <FieldTitle>Hobbies:</FieldTitle> <br />
    {R.map(tag => <Tag style={{margin: '2px', cursor: 'initial'}} color="orange" key={tag}>{tag}</Tag>)(tags)}
  </HobbiesStyle>
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
  	const {
  	  skills,
  	  aboutMe : {
  	    name,
  	    age,
  	    status,
  	    description,
  	    location,
  	    email,
  	    hobbies,
  	  }
  	} = home;
    
    const LeftStrip = () =>
       <LeftStripStyle onClick={() => this.handleShow('about')}>
          <Title> Skills </Title>
       </LeftStripStyle>
    ;

    const RightStrip = () =>
      <WrapperRightStyle>
        <RightStripStyle onClick={() => this.handleShow('skill')}>
          <Title> About </Title>
        </RightStripStyle>
        <AboutStyle style={{ display: this.state.skill ? 'flex' : 'none' }}>
        <div style={{ width: '80%'}}>
        {
          [
            AboutFormat("Name", name),
            AboutFormat("Age", age),
            AboutFormat("Status", status),
            AboutFormat("Description", description),
            AboutFormat("Location", location),
            AboutFormat("Email", email),
            Hobbies(hobbies),
          ]
        }
        </div>
        <img src='./profil.png' />
        </AboutStyle>
      </WrapperRightStyle>
    ;

    return (
      <Wrapper>
        <Header />
        <ButtonStyle type="primary" icon="download" size="default">
          Download my CV! (unavailable yet)
        </ButtonStyle>
        <LeftStrip />
          <SkillStyle style={{ display: this.state.about ? 'block' : 'none' }}>
          { R.map((s) =>
          (
          	[
          	<Title>{s.langage}</Title>,
            <Progress style={{ boxShadow: '10px black' }} key={s.langage} percent={s.grade} showInfo={false} status="active" />
            ]
          ), skills) }
          </SkillStyle>

        <RightStrip />
      </Wrapper>
    )
  }
}



export default Home;


// __________________________________________ DOWNLOAD CV

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }

// // Start file download.
// document.getElementById("dwn-btn").addEventListener("click", function(){
//     // Generate download of hello.txt file with some content
//     var text = document.getElementById("text-val").value;
//     var filename = "hello.txt";
    
//     download(filename, text);
// }, false);