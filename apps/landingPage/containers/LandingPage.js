// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';

import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Features from './Features';
import Try from './Try';
import DeveloperExperience from './DeveloperExperience';

type State = {|
  scroll: number,
|};

export const theme = {
  orbit: {
    ...getTokens(),
    fontFamily:
      "'Circular Pro', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  },
};
export default class LandingPage extends React.Component<{}, State> {
  lastScrollY = 0;
  ticking = false;

  state = {
    scroll: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.setState({ scroll: this.lastScrollY });

        this.ticking = false;
      });

      this.ticking = true;
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Menu />
          <Header />
          <Features scroll={this.state.scroll} />
          <DeveloperExperience />
          <Try />
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
