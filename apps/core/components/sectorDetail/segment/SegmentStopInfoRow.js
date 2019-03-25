// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Icon,
  StyleSheet,
  designTokens,
  type IconNameType,
} from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +iconName: IconNameType,
  +infoTextWeight?: 'normal' | 'bold',
  +infoText: ?string,
  +infoLabel: ?string,
|};

export default function SegmentStopInfoRow(props: Props) {
  return (
    <View style={styles.container}>
      <Icon
        size="small"
        color={defaultTokens.colorAlertIconInfo}
        name={props.iconName}
      />
      <View style={styles.infoBlock}>
        <Text
          weight={props.infoTextWeight}
          style={[
            styles.infoText,
            props.infoTextWeight === 'bold' && styles.infoTextThick,
          ]}
        >
          {props.infoText}
        </Text>
        <Text style={styles.infoLabel}>{props.infoLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingStart: 13,
    paddingEnd: parseInt(defaultTokens.spaceMedium, 10),
    paddingVertical: parseInt(defaultTokens.spaceXXXSmall, 10),
  },
  infoBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 19,
  },
  infoText: {
    fontSize: parseInt(defaultTokens.fontSizeTextNormal, 10),
    color: defaultTokens.colorTextPrimary,
  },
  infoTextThick: {
    web: {
      fontWeight: designTokens.fontWeightMedium,
    },
  },
  infoLabel: {
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    color: defaultTokens.colorTextSecondary,
  },
});
