// @flow

import * as React from 'react';
import { render, shallow } from 'react-native-testing-library';

import { Picker } from '..';

describe('Picker', () => {
  const testData = [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }];
  const onValueChange = jest.fn();
  const confirmLabel = 'OK';

  const { getByText } = render(
    <Picker
      optionsData={testData}
      selectedValue={testData[1].value}
      onValueChange={onValueChange}
      confirmLabel={confirmLabel}
    />,
  );

  it('should contain correct label', () => {
    expect(getByText(testData[1].label)).toBeDefined();
  });

  it('renders', () => {
    expect(
      shallow(
        <Picker
          optionsData={testData}
          selectedValue={testData[0].value}
          onValueChange={jest.fn()}
          confirmLabel={confirmLabel}
        />,
      ),
    ).toMatchSnapshot();
  });
});
