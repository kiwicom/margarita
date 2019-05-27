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

import { EventCodeKiwi } from '../config/GA';
import Content from '../components/Content';
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
      <Content>
        <FooterContainer>
          <FooterLeftContainer>
            <a href={CODE_KIWI_LINK} onClick={EventCodeKiwi}>
              <Logo
                src="/static/logo_codekiwicom.svg"
                alt="code.kiwi.com logo"
              />
            </a>
          </FooterLeftContainer>

          <FooterRightContainer>
            {icons.map(icon => (
              <IconLink href={icon.url} key={icon.url}>
                {icon.icon}
              </IconLink>
            ))}
          </FooterRightContainer>
        </FooterContainer>
      </Content>
    </Container>
  );
}

const IconLink = styled.a`
  width: ${defaultTokens.heightButtonNormal};
  height: ${defaultTokens.heightButtonNormal};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 30px;
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
`;

const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
