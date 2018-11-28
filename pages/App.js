// @flow

import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {graphql, QueryRenderer, type ReadyState} from 'react-relay';

import environment from './Environment';

type Props = Object;

export default class App extends React.Component<Props> {
  renderRelayContainer = ({error, props}: ReadyState) => {
    if (error) {
      return (
        <View>
          <Text style={styles.text}>{error.message}</Text>
        </View>
      );
    }
    if (!props) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.hello}</Text>
      </View>
    );
  };

  render() {
    return (
      <QueryRenderer
        variables={{}}
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        render={this.renderRelayContainer}
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
