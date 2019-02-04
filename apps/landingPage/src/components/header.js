// @flow

import React from 'react';
import { Link } from 'gatsby';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import logo from '../images/logo.png';

const links = [
  { title: 'About Margarita', link: '/' },
  { title: 'Playground', link: '/playground' },
  { title: 'Features', link: '/features' },
  { title: 'Demo', link: '/demo' },
  {
    title: 'Installation',
    link: 'https://github.com/kiwicom/margarita/',
  },
];

export default () => (
  <Header>
    <a href="https://code.kiwi.com/">
      <Logo src={logo} alt="Logo" />
    </a>
    <HeaderRight>
      {links.map(el => {
        const internal = /^\/(?!\/)/.test(el.link);
        return internal ? (
          <LinkNoStyleGatsby to={el.link}>
            <Heading type="title4"> {el.title}</Heading>
          </LinkNoStyleGatsby>
        ) : (
          <LinkNoStyle href={el.link}>
            <Heading type="title4">{el.title}</Heading>
          </LinkNoStyle>
        );
      })}
    </HeaderRight>
  </Header>
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3vh;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 38px;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
`;

const LinkNoStyleGatsby = styled(Link)`
  text-decoration: none;
`;
