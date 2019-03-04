// @flow

import * as React from 'react';
import { Text as RNText, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { createStylesGenerator } from '../utils';
import {
  align as alignTypes,
  fontSize,
  fontWeight as fontWeightTypes,
  textColor,
} from './styles';
import type { TextType } from './TextTypes';

const colorGen = createStylesGenerator('color', textColor);
const fontWeightGen = createStylesGenerator('fontWeight', fontWeightTypes);
const fontSizeGen = createStylesGenerator('fontSize', fontSize);
const alignGen = createStylesGenerator('textAlign', alignTypes);

const Text = ({
  align,
  children,
  dataTest,
  italic,
  numberOfLines,
  size,
  style,
  type,
  uppercase,
  weight,
  expo,
}: TextType) => {
  const textStyle = [styles.text];
  if (italic) {
    textStyle.push(styles.italic);
  }
  if (uppercase) {
    textStyle.push(styles.uppercase);
  }
  if (weight) {
    textStyle.push(styles[weight]);
  }
  if (size) {
    textStyle.push(styles[size]);
  }
  if (type) {
    textStyle.push(styles[type]);
  }
  if (align) {
    textStyle.push(styles[align]);
  }
  if (style) {
    textStyle.push(style);
  }

  if (expo && (Platform.OS === 'ios' || Platform.OS === 'android')) {
    let fontFamily = styles.normalFontFamily;
    if (italic && weight === 'bold') {
      fontFamily = styles.boldItalicFontFamily;
    } else if (italic) {
      fontFamily = styles.italicFontFamily;
    } else if (weight === 'bold') {
      fontFamily = styles.boldFontFamily;
    }
    textStyle.push(fontFamily);
  }

  return (
    <RNText
      data-test={dataTest}
      style={textStyle}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  expo: false,
};

const styles = StyleSheet.create({
  text: {
    margin: 0,
    fontFamily: Platform.OS === 'web' ? defaultTokens.fontFamily : 'Roboto',
  },
  italic: {
    fontStyle: 'italic',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  ...fontWeightGen(),
  ...alignGen(),
  ...colorGen(),
  ...fontSizeGen(),
  normalFontFamily: {
    fontFamily: 'Roboto',
  },
  boldFontFamily: {
    fontFamily: 'RobotoBold',
  },
  italicFontFamily: {
    fontFamily: 'RobotoItalic',
  },
  boldItalicFontFamily: {
    fontFamily: 'RobotoBoldItalic',
  },
});

export default Text;
