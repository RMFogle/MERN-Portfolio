import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Ryan Fogle <br />
        Full-Stack Developer
      </SectionTitle>
      <SectionText>
      I'm from Los Angeles, CA. I focus on MERN stack web development to bring the best experience to your users. However, I'm always happy to learn new technologies. Here is some of my work...
      <br />
      <br />
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;