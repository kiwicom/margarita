// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Text from '../index';

describe('Text', () => {
  const children = 'Lorem ipsum';
  const { getByText } = render(<Text>{children}</Text>);
  it('should have defined children text', () => {
    expect(getByText(children)).toBeDefined();
  });
});
