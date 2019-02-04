// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';
import Demo from '../components/demo';
import Info from '../components/info';
import Headline from '../components/headline';
import Playground from '../components/playground';

const iframeWidth = 1200;
const iframeHeight = 800;

export default () => (
  <LandingPage>
    <GlobalStyle />
    <Header />
    <Headline iframeWidth={iframeWidth} />
    <Playground iframeHeight={iframeHeight} iframeWidth={iframeWidth} />
    <Info iframeWidth={iframeWidth} />
    <Demo iframeHeight={iframeHeight} iframeWidth={iframeWidth} />
    <Footer />
  </LandingPage>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12vw 0 12vw;
`;
