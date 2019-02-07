// @flow

import React from 'react';
import { Text, Separator } from '@kiwicom/orbit-components/lib/';
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from '@kiwicom/orbit-components/lib/icons/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import logo from '../images/logo.png';
import {
  termsAndConditions,
  termsOfUse,
  privacyPolicy,
  security,
  codeKiwiInstagram,
  codeKiwiTwitter,
  kiwiLinkedIn,
  codeKiwiFacebook,
  codeKiwi,
} from '../../../../linksConfig';

const links = [
  { title: 'Terms & Conditions', url: termsAndConditions },
  { title: 'Terms of Use', url: termsOfUse },
  { title: 'Privacy Policy', url: privacyPolicy },
  { title: 'Security', url: security },
];

const icons = [
  {
    url: codeKiwiInstagram,
    icon: <Instagram customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: codeKiwiTwitter,
    icon: <Twitter customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: kiwiLinkedIn,
    icon: <Linkedin customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: codeKiwiFacebook,
    icon: <Facebook customColor={defaultTokens.colorIconTertiary} />,
  },
];

export default () => (
  <Container>
    <Separator />
    <Footer>
      <FooterLeftContainer>
        <a href={codeKiwi}>
          <Logo src={logo} alt="Logo" />
        </a>
        <FooterLeftLinks>
          {links.map(link => (
            <LinkNoStyle href={link.url} key={link.url}>
              <Text type="secondary">{link.title}</Text>
            </LinkNoStyle>
          ))}
        </FooterLeftLinks>
      </FooterLeftContainer>
      <FooterRightContainer>
        {icons.map(icon => (
          <a href={icon.url} key={icon.url}>
            {icon.icon}
          </a>
        ))}
      </FooterRightContainer>
    </Footer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 105px;
  align-items: center;
`;

const Logo = styled.img`
  height: 42px;
  padding-left: 48px;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
`;

const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 44vw;
`;

const FooterLeftLinks = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-evenly;
`;

const FooterRightContainer = styled.div`
  display: flex;
  width: 14vw;
  justify-content: space-around;
  padding-right: 35px;
`;
