// @flow

import React from 'react';
import App, { Container, type AppInitialProps } from 'next/app';
import {
  Provider as NavigationProvider,
  Consumer as NavigationConsumer,
} from '@kiwicom/margarita-navigation';
import isEqual from 'react-fast-compare';

import Layout from '../components/Layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: AppInitialProps) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let params;
    if (router.query) {
      params = router.query;
    }
    return { pageProps, params };
  }

  hydrateSelf(params, navigation) {
    if (!isEqual(params, navigation.state.params)) {
      navigation.setParams(params);
    }
  }

  render() {
    const { Component, pageProps, params } = this.props;

    return (
      <Container>
        <NavigationProvider>
          <Layout>
            <NavigationConsumer>
              {({ navigation }) => {
                this.hydrateSelf(params, navigation);
              }}
            </NavigationConsumer>
            <Component {...pageProps} />
          </Layout>
        </NavigationProvider>
      </Container>
    );
  }
}
