// @flow

import * as React from 'react';
import memoize from 'memoize-one';
import isEqual from 'react-fast-compare';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import { createTheme } from './ThemeHelpers';

export type Tokens = {|
  fontFamilyNormal?: string,
  fontFamilyBold?: string,
  fontFamilyItalic?: string,
  fontFamilyBoldItalic?: string,
|};

export type Styles = {
  +normalFontFamily?: StylePropType,
  +boldFontFamily?: StylePropType,
  +italicFontFamily?: StylePropType,
  +boldItalicFontFamily?: StylePropType,
};

export type Theme = {|
  tokens: Tokens,
  styles: Styles,
|};

type Props = {|
  +children?: React.Node,
  +tokens?: Tokens,
|};

const defaultTokens = {
  fontFamilyNormal: 'Roboto',
  fontFamilyBold: 'RobotoBold',
  fontFamilyItalic: 'RobotoItalic',
  fontFamilyBoldItalic: 'RobotoBoldItalic',
};

const { Provider, Consumer } = React.createContext<Theme>(
  createTheme(defaultTokens),
);

export default class ThemeProvider extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.getStyles = memoize(tokens => {
      return createTheme({
        ...defaultTokens,
        ...(tokens ?? {}),
      });
    }, isEqual);
  }

  getStyles: (?Tokens) => Theme;

  render() {
    return (
      <Provider value={this.getStyles(this.props.tokens)}>
        {this.props.children}
      </Provider>
    );
  }
}

export const withTheme = (Component: React.ElementType) => {
  const WithTheme = (props: Object) => (
    <Consumer>{theme => <Component {...props} theme={theme} />}</Consumer>
  );
  return WithTheme;
};
