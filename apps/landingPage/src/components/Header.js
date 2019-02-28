// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import logo from '../images/logo.png';
import { github, codeKiwi } from '../../../../linksConfig';
import { BREAKPOINTS } from '../mediaQueriesConfig';

const linksHeader = [
  { title: 'About Margarita', link: '/' },
  { title: 'Playground', link: '#playground' },
  {
    title: 'GitHub',
    link: github,
  },
];

export default function Header() {
  return (
    <HeaderContainer>
      <a href={codeKiwi}>
        <Logo src={logo} alt="Logo" />
      </a>
      <HeaderRight>
        {linksHeader.map(el => (
          <LinkWithoutStyle key={el.title} href={el.link}>
            <Heading type="title4">{el.title}</Heading>
          </LinkWithoutStyle>
        ))}
      </HeaderRight>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;
  align-items: center;
`;

const Logo = styled.img`
  height: 42px;
  padding-left: 2vw;
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 3vw;
  width: 80vw;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 70vw;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP}px) {
    width: 30vw;
  }
  @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
    width: 20vw;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
`;
