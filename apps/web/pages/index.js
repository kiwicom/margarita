// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Search, SearchContextProvider } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';
import { withRouter, type Router } from 'next/router';
import qs from 'qs';

import Layout from '../components/Layout';

type Props = {|
  +router: Router,
|};

function IndexPage({ router }: Props) {
  function onSubmit(query) {
    const routerConfig = '/?' + qs.stringify(query);

    router.push(routerConfig, routerConfig, {
      shallow: true,
    });
  }

  return (
    <Layout>
      <View style={styles.page}>
        <SearchContextProvider {...qs.parse(router.query)}>
          <Search onSubmit={onSubmit} />
        </SearchContextProvider>
      </View>
    </Layout>
  );
}

export default withRouter<Props>(IndexPage);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
