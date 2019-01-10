// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import { Hoverable } from '..';

const originalPlatform = Platform.OS;
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();

afterEach(() => {
  Platform.OS = originalPlatform;
});

describe('Hoverable - web', () => {
  Platform.OS = 'web';
  const { getByType } = render(
    <Hoverable onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <View />
    </Hoverable>
  );

  it('should contain a children', () => {
    expect(getByType(View)).toBeDefined();
  });

  it('should execute onMouseEnter method', () => {
    fireEvent(getByType(View), 'mouseEnter');
  });

  it('should execute onMouseLeave method', () => {
    fireEvent(getByType(View), 'mouseLeave');
  });

  it('should match snapshot', () => {
    Platform.OS = 'web';
    const component = render(
      <Hoverable onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <View />
      </Hoverable>
    );

    expect(component).toMatchSnapshot();
  });
});

describe('Hoverable - native', () => {
  it('should match snapshot', () => {
    Platform.OS = 'ios';
    const component = render(
      <Hoverable onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <View />
      </Hoverable>
    );

    expect(component).toMatchSnapshot();
  });
});
