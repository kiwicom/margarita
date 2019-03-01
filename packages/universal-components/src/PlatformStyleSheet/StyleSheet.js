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
 *     web: {
 *       padding: 30,
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
      let { ios, android, web, ...style } = { ...styles[name] };
      if (ios && Platform.OS === 'ios') {
        style = { ...style, ...ios };
      }
      if (android && Platform.OS === 'android') {
        style = { ...style, ...android };
      }
      if (web && Platform.OS === 'web') {
        style = { ...style, ...web };
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};
