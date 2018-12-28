// @flow

import React from 'react';
import App, { Container, type AppInitialProps } from 'next/app';
import { Provider as NavigationProvider } from '@kiwicom/margarita-navigation';

import Layout from '../components/Layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: AppInitialProps) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NavigationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavigationProvider>
      </Container>
    );
  }
}
