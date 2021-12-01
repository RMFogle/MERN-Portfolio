import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiAdobecreativecloud } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies for web and mobile app development. I'm currently working with Xcode, React-Native, TypeScript, Firebase, and PostgreSQL.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, React-Redux, Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB, Node, Express, SQL, MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobecreativecloud size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Adobe XD, Spark, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
