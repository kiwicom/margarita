// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Card } from '..';

import { Text } from '../../Text';
import { Touchable } from '../../Touchable';

const noop = jest.fn();
const children = 'Lorem ipsum';
describe('Card', () => {
  const { getByText, getByType, getByProps } = render(
    <Card onPress={noop} delayPressIn={1000}>
      <Text>{children}</Text>
    </Card>,
  );

  it('should have a children', () => {
    expect(getByText(children)).toBeDefined();
  });

  it('should handle onPress', () => {
    fireEvent(getByType(Touchable), 'press');
  });

  it('should have a delay', () => {
    expect(getByProps({ delayPressIn: 1000 })).toBeDefined();
  });
});
