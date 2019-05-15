// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';

import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Features from './Features';
import Playground from './Playground';
import DeveloperExperience from './DeveloperExperience';

export const theme = {
  orbit: {
    ...getTokens(),
    fontFamily:
      "'Circular Pro', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  },
};

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu />
        <Header />
        <Features />
        <DeveloperExperience />
        <Playground />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
