// @flow

import { StyleSheet } from '..';

import { type StyleObjectType, type StylePropType } from '../StyleTypes';

/**
 * Purpose of this file is to test Flow types in the styles. Output of the Flow
 * console should be silent unless there are errors - it stopped working or
 * we are using suppress comments where not needed (because it stopped working):
 */

export const testObject: StyleObjectType = {
  testA: {
    fontSize: 12,
    paddingStart: 10,
  },
  // $FlowExpectedError: "android" and "web" keys are not allowed here - should be already flattened
  testB: {
    android: {
      fontSize: 12,
    },
    web: {
      paddingBottom: 25,
    },
  },
};

export const testBrokenRTL: StylePropType = StyleSheet.create({
  // $FlowExpectedError: should be "paddingStart"
  testA: {
    paddingLeft: 10,
  },
  // $FlowExpectedError: should be "borderBottomEndRadius"
  testB: {
    borderBottomRightRadius: 3,
  },
});

export const testElevation: StylePropType = StyleSheet.create({
  // $FlowExpectedError: elevation must be under the Android key
  testA: {
    elevation: 1,
  },
  testB: {
    android: {
      elevation: 1,
    },
  },
});

export const testStyleSheetPlatforms: StylePropType = StyleSheet.create({
  testA: {
    fontSize: 12,
    android: {
      color: 'red',
    },
    ios: {
      color: 'blue',
    },
  },
  testOnlyAndroid: {
    android: {
      color: 'red',
    },
  },
  testOnlyIOS: {
    ios: {
      color: 'blue',
    },
  },
  testOnlyWeb: {
    web: {
      color: 'green',
    },
  },
});
