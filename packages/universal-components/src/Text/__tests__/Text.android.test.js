// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Text from '../Text';

jest.mock('Platform', () => ({
  select: jest.fn(),
  OS: 'android',
}));

describe('Text -- Android', () => {
  it('should have the default font family', () => {
    const boldItalic = render(
      <Text italic weight="bold">
        Lorem
      </Text>,
    );

    expect(boldItalic.toJSON()).toMatchSnapshot();
  });

  it('should have the correct font family -- EXPO', () => {
    const normal = render(<Text expo>Lorem</Text>);
    const bold = render(
      <Text weight="bold" expo>
        Lorem
      </Text>,
    );
    const italic = render(
      <Text italic expo>
        Lorem
      </Text>,
    );
    const boldItalic = render(
      <Text italic weight="bold" expo>
        Lorem
      </Text>,
    );

    expect(normal.toJSON()).toMatchSnapshot();
    expect(bold.toJSON()).toMatchSnapshot();
    expect(italic.toJSON()).toMatchSnapshot();
    expect(boldItalic.toJSON()).toMatchSnapshot();
  });
});
