// @flow

import React from 'react';
import { Separator } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import { BREAKPOINTS } from '../mediaQueriesConfig';
import Highlight from '../components/Highlight';
import AccentedText from '../components/AccentedText';
import Content from '../components/Content';

export default function Playground() {
  return (
    <>
      <Separator />
      <a name="playground" />
      <Content id="playground">
        <Container>
          <AccentedText>
            <Highlight>Try it out</Highlight> with GraphQL playground
          </AccentedText>

          <WrapperIframe>
            <Iframe
              title="GraphQL playground"
              src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
            />
          </WrapperIframe>
        </Container>
      </Content>
    </>
  );
}
const Container = styled.div`
  margin-top: 70px;
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
