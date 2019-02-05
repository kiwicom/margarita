// @flow

import { YellowBox } from 'react-native';

import StorybookUI from './storybook.native';

YellowBox.ignoreWarnings(['Require cycle: node_modules/@storybook']);

export default StorybookUI;
