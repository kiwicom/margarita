// @flow

import * as React from 'react';
import { render, shallow, fireEvent } from 'react-native-testing-library';

import { SegmentedButton } from '..';

describe('SegmentedButton', () => {
  const testData = [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }];
  const onValueChange = jest.fn();

  const { getByText } = render(
    <SegmentedButton
      segmentsData={testData}
      selectedValue={testData[0].value}
      onValueChange={onValueChange}
    />,
  );

  it('should contain labels', () => {
    expect(getByText(testData[0].label)).toBeDefined();
    expect(getByText(testData[1].label)).toBeDefined();
  });

  it('should execute onValueChange method with correct value', () => {
    fireEvent(getByText(testData[0].label), 'press');
    expect(onValueChange).toHaveBeenCalledWith(testData[0].value);
  });

  it('renders', () => {
    expect(
      shallow(
        <SegmentedButton
          segmentsData={testData}
          selectedValue="a"
          onValueChange={jest.fn()}
        />,
      ),
    ).toMatchSnapshot();
  });
});
