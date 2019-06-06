// @flow

import * as React from 'react';
import { Text as RNText, Platform } from 'react-native';

import { StyleSheet } from '../PlatformStyleSheet';
import { createStylesGenerator } from '../utils';
import {
  align as alignTypes,
  fontSize,
  fontWeight as fontWeightTypes,
  textColor,
} from './styles';
import type { TextType } from './TextTypes';
import { withTheme } from '../ThemeProvider';

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
  ellipsizeMode,
  size,
  style,
  type,
  uppercase,
  weight,
  expo,
  theme,
  accessible,
  accessibilityLabel,
  accessibilityRole,
  accessibilityStates,
  ariaLevel,
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

  let fontFamily = theme.styles.normalFontFamily;
  if (expo && (Platform.OS === 'ios' || Platform.OS === 'android')) {
    if (italic && weight === 'bold') {
      fontFamily = theme.styles.boldItalicFontFamily;
    } else if (italic) {
      fontFamily = theme.styles.italicFontFamily;
    } else if (weight === 'bold') {
      fontFamily = theme.styles.boldFontFamily;
    }
  }
  textStyle.push(fontFamily);

  if (style) {
    // It is important that this is the last one to be added, so consumer can overwrite styles
    textStyle.push(style);
  }

  return (
    <RNText
      data-test={dataTest}
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityStates={accessibilityStates}
      aria-level={ariaLevel}
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
});

export default withTheme(Text);
