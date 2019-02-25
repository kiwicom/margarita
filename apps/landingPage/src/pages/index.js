// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import Info from '../components/Info';
import Headline from '../components/Headline';
import Playground from '../components/Playground';

type Props = {||};

export default class App extends React.Component<Props> {
  render() {
    return (
      <LandingPage>
        <GlobalStyle />
        <Header />
        <Headline />
        <Playground />
        <Info />
        <Demo />
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
