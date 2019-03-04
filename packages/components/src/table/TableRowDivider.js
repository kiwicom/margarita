// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const TableRowDivider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: parseFloat(defaultTokens.borderWidthCard),
    width: '100%',
    backgroundColor: defaultTokens.borderColorTableCell,
    marginVertical: parseFloat(defaultTokens.spaceMedium),
  },
});
export default TableRowDivider;
