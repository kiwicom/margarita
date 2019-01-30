// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import Info from '../components/Info';
import Headline from '../components/Headline';
import Playground from '../components/Playground';

const windowWidth = (typeof window !== `undefined` && window.innerWidth) || 0; //eslint-disable-line
const windowHeight = (typeof window !== `undefined` && window.innerHeight) || 0; //eslint-disable-line

const iframeWidth = windowWidth - 250;
const iframeHeight = windowHeight - 200;

type Props = {||};

export default class App extends React.Component<Props> {
  render() {
    return (
      <LandingPage>
        <GlobalStyle />
        <Header />
        <Headline iframeWidth={iframeWidth} />
        <Info iframeWidth={iframeWidth} />
        <Playground iframeHeight={iframeHeight} iframeWidth={iframeWidth} />
        <Demo iframeHeight={iframeHeight} iframeWidth={iframeWidth} />
        <Footer />
      </LandingPage>
    );
  }
}

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
