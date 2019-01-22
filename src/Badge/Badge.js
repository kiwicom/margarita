// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { BadgeProps, BadgeType } from './BadgeTypes';
import { textColor, wrapperColor } from './styles';

// @TODO children should be string or React element, not element in React text element
export default function Badge({
  children,
  type = 'primary',
  style,
  fontSize,
}: BadgeProps) {
  let dynamicStyle = { fontSize: {} };
  if (fontSize != null) {
    dynamicStyle = StyleSheet.create({
      fontSize: {
        fontSize,
      },
    });
  }

  return (
    <View style={[styles.wrapper, theme(type).wrapper, style]}>
      <Text style={[styles.text, dynamicStyle.fontSize, theme(type).text]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    paddingHorizontal: 4,
    web: {
      width: 'fit-content',
    },
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 18, // @TODO parseFloat(defaultTokens.heightBadge) - after design tokens update
    fontWeight: '500',
    letterSpacing: 0.3,
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
