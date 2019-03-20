// @flow

import { StyleSheet } from '../PlatformStyleSheet';
import type { Tokens, Theme } from './ThemeProvider';

export const createTheme = (tokens: Tokens): Theme => {
  return {
    tokens: {
      ...tokens,
    },
    styles: StyleSheet.create({
      normalFontFamily: {
        fontFamily: tokens.fontFamilyNormal,
      },
      boldFontFamily: {
        fontFamily: tokens.fontFamilyBold,
      },
      italicFontFamily: {
        fontFamily: tokens.fontFamilyItalic,
      },
      boldItalicFontFamily: {
        fontFamily: tokens.fontFamilyBoldItalic,
      },
    }),
  };
};
