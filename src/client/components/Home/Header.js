import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap !important;
  margin-top: 20px;
  min-width: 450px;
`;

const HeaderRightStyle = styled.div`
  border-left: 15px solid lavender;
  min-width: 475px;
`;

const Card = '\
```js\n\
const data = {\n\
  name: "Sofiane Khatir",\n\
  status: "Student/Developer",\n\
  mail: "skhatir@student.42.fr",\n\
  phone: `curl https://es-so.github.io | grep "phone:[ .0-9]*"` ;)\n\
}\n\
\n\
const Card = ({ data: { name, status, mail, phone } }) =>\n\
    <div>\n\
      {\n\
        [\n\
          `${name} | ${status}`,<br />,\n\
          `email: ${mail}` ,<br />,\n\
          `phone: ${phone}`\n\
        ]\n\
      }\n\
    </div>\n\
;\n\
```\n\
'

const Header = () =>
  <HeaderStyle>
    <img src={"./SKdevelop.png"} />
    <HeaderRightStyle>
      <ReactMarkdown source={Card} />
    </HeaderRightStyle>
  </HeaderStyle>
;

export default Header;
