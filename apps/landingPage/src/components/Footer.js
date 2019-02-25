// @flow

import React from 'react';
import { Separator } from '@kiwicom/orbit-components/lib/';
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from '@kiwicom/orbit-components/lib/icons/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import { BREAKPOINTS } from '../mediaQueriesConfig';
import logo from '../images/logo.png';
import {
  codeKiwiInstagram,
  codeKiwiTwitter,
  kiwiLinkedIn,
  codeKiwiFacebook,
  codeKiwi,
} from '../../../../linksConfig';

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

export default function Footer() {
  return (
    <Container>
      <Separator />
      <FooterContainer>
        <FooterLeftContainer>
          <a href={codeKiwi}>
            <Logo src={logo} alt="Logo" />
          </a>
        </FooterLeftContainer>
        <FooterRightContainer>
          {icons.map(icon => (
            <a href={icon.url} key={icon.url}>
              {icon.icon}
            </a>
          ))}
        </FooterRightContainer>
      </FooterContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 105px;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    flex-direction: column;
    height: 25vh;
    justify-content: space-evenly;
  }
`;

const Logo = styled.img`
  height: 42px;
  padding-left: 48px;
`;

const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 44vw;
`;

const FooterRightContainer = styled.div`
  display: flex;
  width: 14vw;
  justify-content: space-around;
  padding-right: 35px;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 65vw;
    padding: 0;
    align-items: center;
  }
`;
