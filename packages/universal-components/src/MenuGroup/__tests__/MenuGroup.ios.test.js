// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import MenuGroup from '../MenuGroup';
import MenuItem from '../MenuItem';

jest.mock('Platform', () => ({
  OS: 'ios',
}));

describe('MenuGroup', () => {
  it('renders correctly', () => {
    const { output } = shallow(
      <MenuGroup title="Title">
        <MenuItem onPress={jest.fn()} title="test" />
      </MenuGroup>,
    );
    expect(output).toMatchSnapshot();
  });
});
