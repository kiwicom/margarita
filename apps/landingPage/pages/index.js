// @flow

import React from 'react';
import { createGlobalStyle } from 'styled-components';

import LandingPage from '../containers/LandingPage';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'Circular Pro', 'Roboto', sans-serif;
    scroll-snap-type: y proximity;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}
