// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  type IconNameType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  label: string,
  iconName: IconNameType,
|};

export default function HeaderWithIcon({ label, iconName }: Props) {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        color={defaultTokens.colorIconSecondary}
        size="large"
        style={styles.icon}
      />
      <Text style={styles.label} weight="bold">
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: parseFloat(defaultTokens.spaceSmall),
  },
  icon: {
    marginRight: parseFloat(defaultTokens.spaceSmall),
  },
  label: {
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  },
});
