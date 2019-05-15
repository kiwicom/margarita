// @flow

import React from 'react';
import { createGlobalStyle } from 'styled-components';

import LandingPage from '../containers/LandingPage';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    @import url('https://images.kiwi.com/fonts/circular-pro/style.css');
    font-family: 'Circular Pro', 'Roboto', sans-serif;
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
