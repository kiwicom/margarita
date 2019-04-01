// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  StyleSheet,
  Icon,
  ExtendedTouchable,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +onPress: () => void,
  +expanded: boolean,
|};

const IosExpander = () => <View style={styles.iosExpander} />;

const ArrowExpander = ({ expanded }) => (
  <Icon
    name={expanded ? 'chevron-down' : 'chevron-up'}
    color={defaultTokens.borderColorTableCell}
    style={styles.arrowIcon}
  />
);

const Expander = ({ onPress, expanded }: Props) => (
  <View style={styles.container}>
    <ExtendedTouchable overlap={15} onPress={onPress}>
      {Platform.OS === 'ios' ? (
        <IosExpander />
      ) : (
        <ArrowExpander expanded={expanded} />
      )}
    </ExtendedTouchable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 16,
  },
  iosExpander: {
    height: 4,
    width: 40,
    borderRadius: 2,
    backgroundColor: defaultTokens.borderColorTableCell,
    marginBottom: parseFloat(defaultTokens.spaceMedium),
    alignSelf: 'center',
  },
  arrowIcon: {
    alignSelf: 'center',
  },
});
export default Expander;
