// @flow

import { StyleSheet, Platform } from 'react-native'; // eslint-disable-line no-restricted-imports

import type { StyleObjectType, PlatformStyleObjectType } from './StyleTypes';

/**
 * This StyleSheet allows to define platform differences easily:
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flexDirection: 'row',
 *     ios: {
 *       padding: 10,
 *     },
 *     android: {
 *       padding: 20,
 *     },
 *   }
 * })
 */
export default {
  absoluteFill: StyleSheet.absoluteFill,

  absoluteFillObject: {
    position: 'absolute',
    start: 0,
    end: 0,
    top: 0,
    bottom: 0,
  },

  hairlineWidth: StyleSheet.hairlineWidth,

  flatten: StyleSheet.flatten,

  create(styles: PlatformStyleObjectType): StyleObjectType {
    const platformStyles = {};
    Object.keys(styles).forEach(name => {
      let { ios, android, ...style } = { ...styles[name] }; // eslint-disable-line prefer-const
      if (ios && Platform.OS === 'ios') {
        style = { ...style, ...ios };
      }
      if (android && Platform.OS === 'android') {
        style = { ...style, ...android };
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};
