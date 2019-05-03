// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { SortTabs } from '..';

import { SortTabsData } from '../SortTabs';
import { priceDurationParams } from '../SortTabs.stories';

describe('SortTabs', () => {
  const onValueChange = jest.fn();
  const { getByText, getByProps } = render(
    <SortTabs
      selectedValue={SortTabsData[0].value}
      onValueChange={onValueChange}
      priceDurationParams={priceDurationParams}
    />,
  );

  it('renders correctly', () => {
    expect(
      render(
        <SortTabs
          selectedValue={SortTabsData[0].value}
          onValueChange={jest.fn()}
          priceDurationParams={priceDurationParams}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders correctly with no parameters', () => {
    expect(
      render(
        <SortTabs
          selectedValue={SortTabsData[0].value}
          onValueChange={jest.fn()}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should contain all the different sorting labels', () => {
    expect(getByText(SortTabsData[0].label)).toBeDefined();
    expect(getByText(SortTabsData[1].label)).toBeDefined();
    expect(getByText(SortTabsData[2].label)).toBeDefined();
  });

  it('should contain all the correct Icons', () => {
    expect(getByProps({ name: SortTabsData[0].icon })).toBeDefined();
    expect(getByProps({ name: SortTabsData[1].icon })).toBeDefined();
    expect(getByProps({ name: SortTabsData[2].icon })).toBeDefined();
  });

  it('should execute onValueChange method with correct value', () => {
    fireEvent(getByText(SortTabsData[1].label), 'press');
    expect(onValueChange).toHaveBeenCalledWith(SortTabsData[1].value);
  });
});
