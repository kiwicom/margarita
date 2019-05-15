// @flow

import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Features from './Features';
import Playground from './Playground';
import DeveloperExperience from './DeveloperExperience';

export default function LandingPage() {
  return (
    <Container>
      <Menu />
      <Header />
      <Features />
      <DeveloperExperience />
      <Playground />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
