import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from './Environment';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`query AppQuery { hello }`}
        render={({ error, props }) => {
          if (!props) {
            return null;
          }
          return (
            <View style={styles.container}>
              <Text style={styles.text}>{props.hello}</Text>
            </View>
          );
        }}/>
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
