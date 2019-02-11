// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import ShareIcon from '../ShareIcon';

jest.mock('Platform', () => ({
  select: jest.fn(),
  OS: 'android',
}));

describe('ShareIcon -- android', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<ShareIcon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
