// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import { BREAKPOINTS } from '../mediaQueriesConfig';

type Props = {|
  +iframeWidth: number,
  +iframeHeight: number,
|};

export default ({ iframeWidth, iframeHeight }: Props) => (
  <Playground id="playground">
    <HeadingContainer>
      <Heading type="title1">Try it out!</Heading>
      <Heading type="title2">It has its own GraphQL server</Heading>
    </HeadingContainer>
    <ContainerIframe>
      <WrapperIframe>
        <Iframe
          title="GraphQL playground"
          src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
        />
      </WrapperIframe>
    </ContainerIframe>
  </Playground>
);

const Playground = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-top: 20px;
  }
`;

const ContainerIframe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`;

const WrapperIframe = styled.div`
  position: relative;
  padding-bottom: 46.25%;
  margin-bottom: -4%;
  width: 80%;

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 100%;
    margin: 0;
    padding-bottom: 130%;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-bottom: 50px;
`;
