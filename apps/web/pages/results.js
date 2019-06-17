// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';
import { type Router } from 'next/router';
import qs from 'qs';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

type Props = {
  +router: Router,
};

const results = ({ router }: Props) => {
  function changeUrl(query) {
    const routerConfig = '/results?' + qs.stringify(query);
    router.push(routerConfig, routerConfig, {
      shallow: true,
    });
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Results routerQuery={router.query} onSubmit={changeUrl} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withPageRouter<{}>(results);
