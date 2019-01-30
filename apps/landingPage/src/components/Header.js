// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import logo from '../images/logo.png';
import { github, codeKiwi } from '../../../../linksConfig';

const linksHeader = [
  { title: 'About Margarita', url: '/' },
  { title: 'Playground', url: '#playground' },
  { title: 'Features', url: '#features' },
  { title: 'Demo', url: '#demo' },
  {
    title: 'GitHub',
    url: github,
  },
];

export default () => (
  <Header>
    <a href={codeKiwi}>
      <Logo src={logo} alt="Logo" />
    </a>
    <HeaderRight>
      {linksHeader.map(link => (
        <LinkNoStyle key={link.title} href={link.url}>
          <Heading type="title4">{link.title}</Heading>
        </LinkNoStyle>
      ))}
    </HeaderRight>
  </Header>
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3vh 3vw 0 2vw;
  align-items: center;
`;

const Logo = styled.img`
  height: 42px;
`;

const HeaderRight = styled.div`
  display: flex;
  width: 34vw;
  justify-content: space-between;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
`;
