// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';

import withHover from '../withHover';

const originalPlatform = Platform.OS;

afterEach(() => {
  Platform.OS = originalPlatform;
});

const Hoverable = withHover(
  (props: {
    isHovered: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
  }) => <View testID="childView" {...props} />,
);

describe('Hoverable - web', () => {
  Platform.OS = 'web';
  const { getByType, getByTestId } = render(<Hoverable />);

  it('should contain children', () => {
    expect(getByTestId('childView')).toBeDefined();
  });

  it('should execute onMouseEnter method', () => {
    fireEvent(getByType(View), 'mouseEnter');
  });

  it('should execute onMouseLeave method', () => {
    fireEvent(getByType(View), 'mouseLeave');
  });

  it('should match snapshot', () => {
    Platform.OS = 'web';
    const component = render(<Hoverable />);

    expect(component).toMatchSnapshot();
  });
});

describe('Hoverable - native', () => {
  it('should match snapshot', () => {
    Platform.OS = 'ios';
    const component = render(<Hoverable />);

    expect(component).toMatchSnapshot();
  });
});
