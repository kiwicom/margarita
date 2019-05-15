// @flow

import * as React from 'react';
import styled from 'styled-components';
import { GITHUB_LINK } from '@kiwicom/margarita-config';

import Content from '../components/Content';

export default function Menu() {
  return (
    <Container>
      <Content>
        <Rows>
          <Logo src="/static/logo_colored.png" alt="Kiwi.com logo" />
          <MenuGroup>
            <MenuItem href="#features">Features</MenuItem>
            <MenuItem href="#playground">Try it out</MenuItem>
            <MenuItem href={GITHUB_LINK}>Github</MenuItem>
          </MenuGroup>
        </Rows>
      </Content>
    </Container>
  );
}

const Rows = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: block;
  height: 36px;
  padding-top: 2px;
`;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.92);
  border-bottom: solid 1px #d8d8d8;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  -webkit-backdrop-filter: blur(10px);
`;

const MenuGroup = styled.div`
  flex-direction: row;
  display: flex;
`;

const MenuItem = styled.a`
  width: 100px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #555;
  }
`;
