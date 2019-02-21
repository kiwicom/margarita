// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { withNavigation } from '@kiwicom/margarita-navigation';

type Props = {|
  +detailId: ?string,
|};

class ResultDetail extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.detailId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withNavigation(ResultDetail);
