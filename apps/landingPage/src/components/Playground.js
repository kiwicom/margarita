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
  padding-top: 80px;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-top: 20px;
  }
`;

const WrapperIframe = styled.div`
  position: relative;
  padding-top: 36.25%
  overflow: hidden;
  margin-bottom: 20px;
  width: 80vw;
  @media (max-width: ${BREAKPOINTS.DESKTOP}px) {
    padding-top: 50%;
  }
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    padding-top: 60%;
  }
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 100vw;
    padding-top: 110%;
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
