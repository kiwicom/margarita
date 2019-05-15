// @flow

import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../mediaQueriesConfig';
import AccentedText from '../components/AccentedText';
import Content from '../components/Content';
import Title from '../components/Title';

export default function Playground() {
  return (
    <Content id="playground">
      <Title>Try Margarita</Title>
      <Container>
        <AccentedText>See GraphQL in action</AccentedText>

        <WrapperIframe>
          <Iframe
            title="GraphQL playground"
            src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
          />
        </WrapperIframe>
      </Container>
    </Content>
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
