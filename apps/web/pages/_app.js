// @flow

import * as React from 'react';
import { default as NextApp, Container } from 'next/app';
import { LayoutContextProvider } from '@kiwicom/margarita-utils';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <LayoutContextProvider>
          <Component {...pageProps} />
        </LayoutContextProvider>
      </Container>
    );
  }
}
