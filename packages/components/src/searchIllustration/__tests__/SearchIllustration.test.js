// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import SearchIllustration from '../SearchIllustration';

it('renders', () => {
  expect(shallow(<SearchIllustration />)).toMatchSnapshot();
});
