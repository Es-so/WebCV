import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Progress, Tag, Button, icon } from 'antd';
import { home } from '../../utils/home';
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap !important;
  margin-top: 20px;
  min-width: 450px;
`;

const Title = styled.h2`
`;

const LeftStripStyle = styled.div`
  width: 90%;
  color: white;
  height: 50px;
  padding: 10px;
  background-image:linear-gradient(left, #00a8cb, white);
  border-radius: 0 10px 0 0;
  margin-left: -5%;
  &:hover {
    cursor: pointer;
    color: #00a8cb;
    background-image:linear-gradient(right, #00a8cb, white) !important;
  }
`;

const RightStripStyle = styled.div`
  width: 90%;
  color: white;
  text-align: right;
  height: 50px;
  margin-top: 40px;
  padding: 10px;
  background-image:linear-gradient(right, #002f65, white);
  border-radius: 0 0 0 10px;
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
  background: white;
  justify-content: flex-end;
  margin-right: -5%;
  width: 80%;
`;

const Card = '\
```js\n\
const data = {\n\
  name: "Sofiane Khatir",\n\
  status: "Student/Developer",\n\
  mail: "skhatir@student.42.fr",\n\
  phone: `curl http://0.0.0.0:3000/home | grep "phone:[ .0-9]*` ;)"\n\
}\n\
\n\
const Card = ({ data: { name, status, mail, phone } }) => {\n\
  const head = `${name}: ${status}`;\n\
  return(\n\
    <div>\n\
      {\n\
        [\n\
          `${name} | ${status}`,<br />,\n\
          `email: ${mail}` ,<br />,\n\
          `phone: ${phone}`\n\
        ]\n\
      }\n\
    </div>\n\
  )\n\
}\n\
```\n\
'

const Header = () =>
  <HeaderStyle>
  <img src={"./SKdevelop.png"} />
    <div style={{ borderLeft: '15px solid lavender', minWidth: '475px'}}>
    <ReactMarkdown source={Card} />
    </div>
  </HeaderStyle>
;

const FieldTitle = styled.h3`
  display: inline;
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
  	console.log(home, home.skills)
  	const { skills, aboutMe } = home;
    const LeftStrip = () =>
       <LeftStripStyle onClick={() => this.handleShow('about')}>
          <Title> Skills </Title>
       </LeftStripStyle>
    ;

    const RightStrip = () =>
      <div style={{  display: 'flex', flexFlow: 'column', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end', marginRight: '-5%' }}>
        <RightStripStyle onClick={() => this.handleShow('skill')}>
          <Title> About </Title>
        </RightStripStyle>
        <AboutStyle style={{ display: this.state.skill ? 'flex' : 'none' }}>
        <div style={{ width: '80%'}}>
        {
          [
            AboutFormat("Name", aboutMe.name),
            AboutFormat("Age", aboutMe.age),
            AboutFormat("Status", aboutMe.status),
            AboutFormat("Description", aboutMe.description),
            AboutFormat("Location", aboutMe.location),
            AboutFormat("Email", aboutMe.email),
            Hobbies(aboutMe.hobbies),
          ]
        }
        </div>
        <div><img src='./profil.png' /> </div>
        </AboutStyle>
      </div>
    ;

    return (
      <Wrapper>
        <Header />
        <Button style={{ width: '60%', minWidth: '500px', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto' , height: '50px' }} type="primary" icon="download" size="default">Download my CV!</Button>
        <LeftStrip />
          <SkillStyle style={{ display: this.state.about ? 'block' : 'none' }}>
          { R.map((s) =>
          (
          	[
          	<Title>{s.langage}</Title>,
            <Progress style={{ boxShadow: '10px black' }} key={s.langage} percent={s.grade} showInfo={false} status="active" />
            ]
          ), home.skills) }
          </SkillStyle>

        <RightStrip />
      </Wrapper>
    )
  }
}

export default Home;
