// @flow

import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import LandingPage from '../components/LandingPage';

export default function App() {
  return (
    <>
      <Head>
        <title>Margarita</title>
        <link rel="icon" type="image/png" href="/static/logo_margarita.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;
