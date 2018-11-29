// @flow

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { AppQueryResponse } from './__generated__/AppQuery.graphql';

type Props = Object;

export default class App extends React.Component<Props> {
  renderInner = (props: AppQueryResponse) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.hello}</Text>
      </View>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        render={this.renderInner}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
  },
});
