// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import Info from '../components/Info';
import Headline from '../components/Headline';
import Playground from '../components/Playground';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const iframeWidth = windowWidth - 250;
const iframeHeight = windowHeight - 200;

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
`;
