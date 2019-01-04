// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results } from '@kiwicom/margarita-core';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

type Props = {|
  +navigation: {|
    +state: {|
      +params: {|
        +travelFrom: string,
        +travelTo: string,
        +dateFrom: string,
        +dateTo: string,
      |},
    |},
  |},
|};

export default class ResultsScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: any) => ({
    headerTintColor: defaultTokens.paletteProductNormal,
    headerTitleStyle: { color: defaultTokens.colorTextPrimary },
    title: `${navigation.getParam('travelFrom')} ${
      navigation.getParam('dateTo') ? '\u21C4' : '\u2192'
    } ${
      navigation.getParam('travelTo')
        ? navigation.getParam('travelTo')
        : 'anywhere'
    }`,
    headerStyle: {
      borderBottomWidth: 0,
    },
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.cardList}>
        <Results {...navigation.state.params} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardList: {
    backgroundColor: defaultTokens.backgroundBody,
    flex: 1,
  },
});
