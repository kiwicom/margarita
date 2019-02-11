// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import {
  Text as UniversalComponentsText,
  StyleSheet,
} from '@kiwicom/universal-components';

/**
 * This wrapper is necessary because loading fonts with Expo does not allow using fontWeight and fontStyle
 * cf. https://docs.expo.io/versions/latest/guides/using-custom-fonts/
 */

export default function Text(
  props: $PropertyType<typeof UniversalComponentsText, 'props'>,
) {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return <UniversalComponentsText {...props} />;
  }
  const { italic, weight } = props;

  let fontFamily = styles.normal;
  if (italic && weight === 'bold') {
    fontFamily = styles.boldItalic;
  } else if (italic) {
    fontFamily = styles.italic;
  } else if (weight === 'bold') {
    fontFamily = styles.bold;
  }

  return (
    <UniversalComponentsText {...props} style={[props.style, fontFamily]} />
  );
}

const styles = StyleSheet.create({
  normal: {
    fontFamily: 'Roboto',
  },
  bold: {
    fontFamily: 'RobotoBold',
  },
  italic: {
    fontFamily: 'RobotoItalic',
  },
  boldItalic: {
    fontFamily: 'RobotoBoldItalic',
  },
});
