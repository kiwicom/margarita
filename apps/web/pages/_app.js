// @flow

import * as React from 'react';
import { default as NextApp, Container } from 'next/app';
import { LayoutContextProvider } from '@kiwicom/margarita-device';
import { Alert, AlertContextProvider } from '@kiwicom/margarita-components';
import {
  UserContextProvider,
  SearchContextProvider,
} from '@kiwicom/margarita-core';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <UserContextProvider>
          <AlertContextProvider>
            <SearchContextProvider>
              <LayoutContextProvider>
                <Component {...pageProps} />
              </LayoutContextProvider>
              <Alert />
            </SearchContextProvider>
          </AlertContextProvider>
        </UserContextProvider>
      </Container>
    );
  }
}
