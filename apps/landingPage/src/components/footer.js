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

// $FlowFixMe - Cannot resolve module RelativeImageStub ( possible solution https://bit.ly/2BYfHRr )
import logo from '../images/logo.png';

const links = [
  { title: 'Terms & Conditions', link: 'https://github.com/kiwicom/margarita' },
  { title: 'Terms of Use', link: 'https://github.com/kiwicom/margarita' },
  { title: 'Privacy Policy', link: 'https://github.com/kiwicom/margarita' },
  { title: 'Security', link: 'https://github.com/kiwicom/margarita' },
];

export default () => (
  <Container>
    <Separator />
    <Footer>
      <FooterLeftContainer>
        <a href="https://code.kiwi.com/">
          <Logo src={logo} alt="Logo" />
        </a>
        <FooterLeftLinks>
          {links.map(el => (
            <LinkNoStyle href={el.link} key={el.title}>
              <Text type="secondary">{el.title}</Text>
            </LinkNoStyle>
          ))}
        </FooterLeftLinks>
      </FooterLeftContainer>
      <FooterRightContainer>
        <a href="https://code.kiwi.com/">
          <Instagram customColor={defaultTokens.colorIconSecondary} />
        </a>
        <a href="https://code.kiwi.com/">
          <Twitter customColor={defaultTokens.colorIconSecondary} />
        </a>
        <a href="https://code.kiwi.com/">
          <Linkedin customColor={defaultTokens.colorIconSecondary} />
        </a>
        <a href="https://code.kiwi.com/">
          <Facebook customColor={defaultTokens.colorIconSecondary} />
        </a>
      </FooterRightContainer>
    </Footer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 38px;
  padding-left: 2vw;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
`;

const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 32vw;
`;

const FooterLeftLinks = styled.div`
  display: flex;
  width: 22vw;
  justify-content: space-around;
`;

const FooterRightContainer = styled.div`
  display: flex;
  width: 14vw;
  justify-content: space-around;
`;
