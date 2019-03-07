// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';

type ArrowProps = {
  arrowStyle?: StylePropType,
  containerStyle?: StylePropType,
};

const Arrow = ({ arrowStyle, containerStyle }: ArrowProps) => (
  <View style={[styles.arrowContainer, containerStyle]}>
    <View style={[styles.arrow]}>
      <View style={[styles.arrowHalf, styles.arrowLeft, arrowStyle]} />
      <View style={[styles.arrowHalf, styles.arrowRight, arrowStyle]} />
    </View>
  </View>
);

export default function TimelineArrow() {
  return (
    <View style={styles.timelineArrowContainer}>
      <View style={styles.circle} />
      <View style={[styles.line, styles.firstLine]} />
      <Arrow
        containerStyle={styles.upperArrowContainer}
        arrowStyle={styles.invisibleArrow}
      />
      <Arrow
        containerStyle={styles.lowerArrowContainer}
        arrowStyle={styles.invisibleArrow}
      />
      <Arrow />
      <View style={[styles.line, styles.secondLine]} />
      <View style={styles.circle} />
    </View>
  );
}

const styles = StyleSheet.create({
  timelineArrowContainer: {
    minHeight: 35,
    alignItems: 'center',
  },
  circle: {
    borderRadius: parseFloat(defaultTokens.borderRadiusCircle),
    width: 6,
    height: 6,
    backgroundColor: defaultTokens.paletteInkLighter,
  },
  line: {
    flex: 1,
    backgroundColor: defaultTokens.paletteCloudNormal,
    width: 2,
  },
  firstLine: {
    marginBottom: -5,
  },
  secondLine: {
    marginTop: -3,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    marginBottom: 3,
    zIndex: parseFloat(defaultTokens.zIndexModal),
  },
  arrow: {
    width: 7,
    height: 7,
    position: 'relative',
  },
  arrowHalf: {
    position: 'absolute',
    backgroundColor: defaultTokens.backgroundButtonSecondaryActive,
  },
  arrowLeft: {
    width: 7,
    height: 2,
    backgroundColor: defaultTokens.paletteInkLighter,
    borderBottomStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderTopStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    position: 'absolute',
    bottom: 0,
  },
  arrowRight: {
    height: 7,
    width: 2,
    backgroundColor: defaultTokens.paletteInkLighter,
    borderTopStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderTopEndRadius: parseFloat(defaultTokens.borderRadiusNormal),
    end: 0,
    position: 'absolute',
  },
  upperArrowContainer: { marginTop: -4 },
  lowerArrowContainer: { marginTop: 4 },
  invisibleArrow: { backgroundColor: defaultTokens.backgroundCard },
});
