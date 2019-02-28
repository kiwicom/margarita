// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import { BREAKPOINTS } from '../mediaQueriesConfig';

export default function Playground() {
  return (
    <PlaygroundContainer id="playground">
      <HeadingContainer>
        <Heading type="title1">Try it out!</Heading>
        <Heading type="title2">It has its own GraphQL server</Heading>
      </HeadingContainer>
      <WrapperIframe>
        <Iframe
          title="GraphQL playground"
          src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
        />
      </WrapperIframe>
    </PlaygroundContainer>
  );
}
const PlaygroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    padding-top: 80px;
  }
`;

const WrapperIframe = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  width: 100vw;
  padding-top: 110%;
  @media (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP}px) {
    width: 80vw;
    padding-top: 50%;
  }
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80vw;
    padding-top: 60%;
  }
  @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
    width: 80vw;
    padding-top: 36.25%;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-bottom: 50px;
`;
