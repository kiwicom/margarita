// @flow

import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

export default function Icons() {
  return (
    <Container>
      <img src="static/logo.png" height={43} alt="Kiwi logo" />
      <img src="static/react-logo.png" height={45} alt="React logo" />
      <img src="static/tequila-logo.png" height={43} alt="Tequila logo" />
      <img src="static/graphql-logo.png" height={43} alt="Graphql logo" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-right: 3vw;
  padding: 50px 0;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (
    max-width: ${BREAKPOINTS.TABLET}px) {
    width: 60%;
    justify-content: space-evenly:
  }
  @media  (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 50vw;
  }
  @media (min-width: ${BREAKPOINTS.BIG_TABLET}px) {
    margin-top: -30px;
  }
`;
