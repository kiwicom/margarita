// @flow

<<<<<<< HEAD
export { default as Text } from './Text';
=======
import * as React from 'react';
import { Text as RNText, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import StyleSheet from '../PlatformStyleSheet';
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
const alingGen = createStylesGenerator('textAlign', alignTypes);

const Text = ({
  numberOfLines,
  children,
  italic,
  uppercase,
  dataTest,
  align = 'left',
  type = 'primary',
  weight = 'normal',
  size = 'normal',
  style,
}: TextType) => (
  <RNText
    numberOfLines={numberOfLines}
    data-test={dataTest}
    style={[
      styles.text,
      italic && styles.italic,
      uppercase && styles.uppercase,
      styles[weight],
      styles[size],
      styles[type],
      styles[align],
      style && style,
    ]}
  >
    {children}
  </RNText>
);
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
  ...alingGen(),
  ...colorGen(),
  ...fontSizeGen(),
});

export default Text;
>>>>>>> Add new type and text truncation
