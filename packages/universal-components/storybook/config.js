// @flow

import { configure } from '@storybook/react';

/**
 * $FlowExpectedError: https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 * Flow complains that require.context is not available in Node, but Storybook uses Webpack under the hood and this is a Webpack specific API
 */
const req = require.context('../src', true, /\.stories\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
