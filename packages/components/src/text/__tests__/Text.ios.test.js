// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Text from '../Text';

jest.mock('Platform', () => ({
  select: jest.fn(),
  OS: 'ios',
}));

describe('Text -- iOS', () => {
  it('should have the correct font family', () => {
    const normal = render(<Text>Lorem</Text>);
    const bold = render(<Text weight="bold">Lorem</Text>);
    const italic = render(<Text italic>Lorem</Text>);
    const boldItalic = render(
      <Text italic weight="bold">
        Lorem
      </Text>,
    );

    expect(normal.toJSON()).toMatchSnapshot();
    expect(bold.toJSON()).toMatchSnapshot();
    expect(italic.toJSON()).toMatchSnapshot();
    expect(boldItalic.toJSON()).toMatchSnapshot();
  });
});
