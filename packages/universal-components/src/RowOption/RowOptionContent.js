// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train',
  +header: string | React.Node,
  +subheader: ?(string | React.Node),
  +info?: string | React.Node,
|};

export default function RowOptionContent({
  type,
  header,
  subheader,
  info,
}: Props) {
  return (
    <View style={styles.padded}>
      <Text
        numberOfLines={1}
        style={[
          styles.header,
          type === 'localization' && styles.localizationHeader,
        ]}
        type="primary"
      >
        {header}
      </Text>
      <View style={styles.rowDirection}>
        {subheader != null && subheader !== '' && (
          <Text type="secondary" style={styles.subheader}>
            {subheader}
          </Text>
        )}
        {info != null && info !== '' && (
          <View style={[styles.rowDirection, styles.padded]}>
            <View style={styles.dotSeparator} testID="dot-separator" />
            <Text type="secondary" style={styles.subheader} numberOfLines={1}>
              {info}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
  },
  subheader: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
  },
  localizationHeader: {
    color: defaultTokens.paletteProductNormal,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  padded: {
    flex: 1,
    paddingEnd: 10,
  },
  dotSeparator: {
    marginHorizontal: 4,
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: defaultTokens.colorTextSecondary,
  },
});
