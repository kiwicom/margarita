/* eslint-disable flowtype/require-valid-file-annotation */
import { getStorybookUI, configure } from '@storybook/react-native';

import { loadStories } from './storyLoader'; //eslint-disable-line

import './rn-addons';

// import stories
configure(loadStories, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
});

export default StorybookUI;
