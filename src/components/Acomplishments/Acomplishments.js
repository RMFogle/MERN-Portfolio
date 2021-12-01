import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiVimeo, SiYoutube } from 'react-icons/si'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxIcon, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { icon: [<a href="https://vimeo.com/272679740" target="_blank" rel="noreferrer"><SiVimeo size="3rem"/></a>], text: 'Cinematography Reel'},
  { icon: [<a href="https://vimeo.com/155497016" target="_blank" rel="noreferrer"><SiVimeo size="3rem"/></a>], text: 'Golden Road Brewery Commercial', },
  { icon: [<a href="https://youtu.be/WFrUH9lYdBg" target="_blank" rel="noreferrer"><SiYoutube size="3rem"/></a>], text: 'Doritos Crash The Super Bowl Commercial "Semi-Finalist" (Director)', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Other Works</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
            <BoxIcon>{card.icon}</BoxIcon>
            <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
