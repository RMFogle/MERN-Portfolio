import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:310-266-4997">310-266-4997</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ryanmfogle@gmail.com">ryanmfogle@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>...</Slogan>
        </CompanyContainer>
        <SocialContainer>
            <SocialIcons href="https://github.com/RMFogle" target="_blank" rel="noreferrer">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/ryanmfogle" target="_blank" rel="noreferrer">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com/foggie_bear" target="_blank" rel="noreferrer">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
