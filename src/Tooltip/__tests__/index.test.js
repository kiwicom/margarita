// @flow

import * as React from 'react';
import { shallow, render } from 'react-native-testing-library';

import { Tooltip, TooltipBubble } from '..';

import { Text } from '../../Text';

describe('TooltipBubble', () => {
  const component = (
    <TooltipBubble
      arrowHorizontalPosition="center"
      arrowVerticalPosition="flex-start"
      text="Hello Kiwi.com"
    />
  );
  const { getByProps } = render(component);

  it('should have correct props', () => {
    expect(getByProps({ arrowHorizontalPosition: 'center' })).toBeDefined();
    expect(getByProps({ arrowVerticalPosition: 'flex-start' })).toBeDefined();
    expect(getByProps({ text: 'Hello Kiwi.com' })).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { output } = shallow(component);
    expect(output).toMatchSnapshot();
  });
});

const children = <Text>Lorem ipsum</Text>;

describe('Tooltip', () => {
  it('should have a children', () => {
    const { getByProps } = render(
      <Tooltip text="Hello Kiwi.com">{children}</Tooltip>,
    );
    expect(getByProps({ children })).toBeDefined();
  });
});
