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
import {
  CODE_KIWI_INSTAGRAM_LINK,
  CODE_KIWI_TWITTER_LINK,
  KIWI_LINKEDIN_LINK,
  CODE_KIWI_FACEBOOK_LINK,
  CODE_KIWI_LINK,
} from '@kiwicom/margarita-config';

import { BREAKPOINTS } from '../mediaQueriesConfig';

const icons = [
  {
    url: CODE_KIWI_INSTAGRAM_LINK,
    icon: <Instagram customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: CODE_KIWI_TWITTER_LINK,
    icon: <Twitter customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: KIWI_LINKEDIN_LINK,
    icon: <Linkedin customColor={defaultTokens.colorIconTertiary} />,
  },
  {
    url: CODE_KIWI_FACEBOOK_LINK,
    icon: <Facebook customColor={defaultTokens.colorIconTertiary} />,
  },
];

export default function Footer() {
  return (
    <Container>
      <Separator />
      <FooterContainer>
        <FooterLeftContainer>
          <a href={CODE_KIWI_LINK}>
            <Logo src="/static/logo.png" alt="Logo" />
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
  align-items: center;
  flex-direction: column;
  height: 25vh;
  justify-content: space-evenly;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    flex-direction: row;
    height: 105px;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 42px;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-left: 48px;
  }
`;

const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 44vw;
  }
`;

const FooterRightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65vw;
  padding: 0;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-items: flex-start;
    width: 160px;
    padding-right: 35px;
  }
`;
