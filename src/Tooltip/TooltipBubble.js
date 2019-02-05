// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +arrowHorizontalPosition?: 'flex-start' | 'center' | 'flex-end',
  +arrowVerticalPosition?: 'flex-start' | 'flex-end',
  +style?: StylePropType,
  +text: string,
  +verticalShift?: number,
|};

export default function TooltipBubble({
  arrowHorizontalPosition = 'center',
  arrowVerticalPosition = 'flex-end',
  style,
  text,
  verticalShift = 3,
}: Props) {
  const invisibleContainerShiftStyle =
    arrowVerticalPosition === 'flex-start'
      ? { marginTop: verticalShift }
      : { marginBottom: verticalShift };
  const arrowVerticalPositionStyle =
    arrowVerticalPosition === 'flex-start'
      ? styles.tooltipBubbleMarginTop
      : styles.tooltipBubbleMarginBottom;

  return (
    <View
      style={[styles.invisibleContainer, invisibleContainerShiftStyle, style]}
    >
      <View
        style={[
          styles.arrowContainer,
          {
            alignItems: arrowHorizontalPosition,
            justifyContent: arrowVerticalPosition,
          },
        ]}
      >
        <View style={styles.arrow} />
      </View>
      <View style={[styles.container, arrowVerticalPositionStyle]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: defaultTokens.colorTextWhite,
    padding: parseFloat(defaultTokens.spaceXSmall),
    zIndex: parseFloat(defaultTokens.zIndexDefault),
  },
  arrow: {
    backgroundColor: defaultTokens.backgroundBadgeDark,
    borderRadius: parseFloat(defaultTokens.borderRadiusSmall),
    height: 17,
    transform: [{ rotate: '45deg' }],
    width: 17,
  },
  arrowContainer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    width: '100%',
    zIndex: parseFloat(defaultTokens.zIndexModalOverlay),
  },
  container: {
    backgroundColor: defaultTokens.backgroundBadgeDark,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    minWidth: 60,
    minHeight: 30,
  },
  invisibleContainer: {
    zIndex: parseFloat(defaultTokens.zIndexModal),
    position: 'relative',
  },
  tooltipBubbleMarginTop: {
    marginTop: parseFloat(defaultTokens.spaceXSmall),
  },
  tooltipBubbleMarginBottom: {
    marginBottom: parseFloat(defaultTokens.spaceXSmall),
  },
});
