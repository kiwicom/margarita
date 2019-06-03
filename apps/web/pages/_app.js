// @flow

import * as React from 'react';
import { default as NextApp, Container } from 'next/app';
import { Alert } from '@kiwicom/margarita-components';
import { ContextComposition } from '@kiwicom/margarita-core';

export default class App extends NextApp {
  render() {
    const {
      Component,
      pageProps,
      router: { query: routerQuery },
    } = this.props;

    return (
      <Container>
        <ContextComposition routerQuery={routerQuery}>
          <Component {...pageProps} />
          <Alert />
        </ContextComposition>
      </Container>
    );
  }
}
