// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

import { textColor, wrapperColor } from './styles';

type BadgeType =
  | 'primary'
  | 'neutral'
  | 'critical'
  | 'success'
  | 'warning'
  | 'info'
  | 'dark'
  | 'white';

type Props = {|
  +children: React.Node,
  +type?: BadgeType,
|};

export default function Badge({ children, type = 'primary' }: Props) {
  return (
    <View style={[styles.wrapper, theme(type).wrapper]}>
      <Text style={[styles.text, theme(type).text]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: parseFloat(defaultTokens.borderRadiusBadge),
    paddingHorizontal: 8,
    height: parseFloat(defaultTokens.heightBadge),
    web: {
      width: 'fit-content',
    },
  },
  text: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.59,
    color: defaultTokens.colorTextBadgeDark,
  },
});

const theme = (type: BadgeType = 'primary') =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: wrapperColor[type],
    },
    text: {
      color: textColor[type],
    },
  });
