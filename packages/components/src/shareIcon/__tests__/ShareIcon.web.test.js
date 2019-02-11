// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { render } from 'react-native-testing-library';

import ShareIcon from '../ShareIcon';

const originalPlatform = Platform.OS;

beforeAll(() => {
  Platform.OS = 'web';
});

afterAll(() => {
  Platform.OS = originalPlatform;
});

describe('ShareIcon -- web', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<ShareIcon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
