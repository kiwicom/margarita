// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import logo from '../images/logo.png';
import { github, codeKiwi } from '../../../../linksConfig';

const linksHeader = [
  { title: 'About Margarita', link: '/' },
  { title: 'Playground', link: '#playground' },
  {
    title: 'GitHub',
    link: github,
  },
];

export default () => (
  <Header>
    <a href={codeKiwi}>
      <Logo src={logo} alt="Logo" />
    </a>
    <HeaderRight>
      {linksHeader.map(el => (
        <LinkNoStyle key={el.title} href={el.link}>
          <Heading type="title4">{el.title}</Heading>
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
  /* width: 34vw; */
  width: 20vw;
  justify-content: space-between;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
`;
