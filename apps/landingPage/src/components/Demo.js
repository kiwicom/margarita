// @flow

import React from 'react';
import { Heading, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';
import { Instagram, Facebook } from '@kiwicom/orbit-components/lib/icons/';

import placeholderPhone from '../images/ios-frame.png';
import {
  github,
  tequila,
  expoLink,
  documentation,
  codeKiwi,
  codeKiwiInstagram,
  codeKiwiFacebook,
} from '../../../../linksConfig';

const links = [
  { title: 'GitHub', url: github },
  { title: 'Tequila', url: tequila },
  { title: 'Expo link', url: expoLink },
  { title: 'Documentation', url: documentation },
  { title: 'Code.kiwi.com', url: codeKiwi },
  { title: 'Code.kiwi.com', url: codeKiwiInstagram, icon: <Instagram /> },
  { title: 'Code.kiwi.com', url: codeKiwiFacebook, icon: <Facebook /> },
];

export default () => (
  <Container>
    <PhoneImage src={placeholderPhone} alt="placeholder" />
    <ContainerTextRight>
      <Heading type="title2">Learn more, visit Github</Heading>
      <Button type="secondary" width={125}>
        <LinkNoStyle href={github}>Link to Docs</LinkNoStyle>
      </Button>
    </ContainerTextRight>
    <HeadingWrapper>
      <Heading type="title1">More links to explore</Heading>
    </HeadingWrapper>
    <LinksWrapper>
      {links.map(link => {
        return link.icon ? (
          <Button type="white" key={link.url} iconLeft={link.icon}>
            <LinkNoStyle href={link.url}>{link.title}</LinkNoStyle>
          </Button>
        ) : (
          <Button type="white" key={link.url}>
            <LinkNoStyle href={link.url}>{link.title}</LinkNoStyle>
          </Button>
        );
      })}
    </LinksWrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const PhoneImage = styled.img`
  height: 600px;
`;

const ContainerTextRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 90px;
  padding-left: 700px;
  padding-bottom: 160px;
`;

const HeadingWrapper = styled.div`
  padding-top: 50px;
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 67vw;
  justify-content: space-around;
  padding: 30px 0 40px 0;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;
