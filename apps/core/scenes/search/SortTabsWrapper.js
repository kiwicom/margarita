// @flow

import * as React from 'react';
import { View } from 'react-native';
import { SortTabs } from '@kiwicom/margarita-components';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import {
  withSearchContext,
  type SortType,
  type SearchContextState,
} from '../../contexts/searchContext';

type Props = {|
  +sortBy: SortType,
  +setSortBy: SortType => void,
|};

const priceDurationParams = {
  QUALITY: {
    price: '7,900',
    currency: 'Kč',
    duration: '3h 40m',
  },
  PRICE: {
    price: '6,300',
    currency: 'Kč',
    duration: '4h 25m',
  },
  DURATION: {
    price: '9,500',
    currency: 'Kč',
    duration: '1h 20min',
  },
};

class SortTabsWrapper extends React.Component<Props> {
  onValueChange = val => this.props.setSortBy(val);

  render() {
    return (
      <>
        <View style={styles.container}>
          <SortTabs
            priceDurationParams={priceDurationParams}
            selectedValue={this.props.sortBy}
            onValueChange={this.onValueChange}
          />
        </View>
        <View style={styles.border} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    web: {
      height: 1,
      borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
      borderBottomColor: defaultTokens.borderColorCard,
      position: 'relative',
      zIndex: -1,
    },
  },
  container: {
    padding: 0,
    ios: {
      marginTop: 8,
    },
    android: {
      marginVertical: 4,
    },
    web: {
      alignSelf: 'center',
      width: '100%',
      maxWidth: designTokens.widthScreenNormal,
    },
  },
});

const select = ({ sortBy, actions: { setSortBy } }: SearchContextState) => ({
  sortBy,
  setSortBy,
});

export default withSearchContext(select)(SortTabsWrapper);
