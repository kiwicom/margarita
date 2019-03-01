import { configure } from '@storybook/react';
import 'loki/configure-react';

const req = require.context('../src', true, /\.stories\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
