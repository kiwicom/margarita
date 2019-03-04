// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import RowOption from '../RowOption';
import { Icon } from '../../Icon';

describe('RowOption', () => {
  const onItemPress = jest.fn();
  const onAddPress = jest.fn();

  const { getAllByType, getByTestId } = render(
    <RowOption
      type="destination"
      header="Very very long long long long long long long long"
      subheader="10 km from center"
      onItemPress={onItemPress}
      onAddPress={onAddPress}
      border="shaped"
      info="Czech Republic"
    />,
  );

  it('should have city icon when type is destination', () => {
    expect(getAllByType(Icon)[0].props.name).toBe('city');
  });

  it('should have dot separator once info prop is passed', () => {
    expect(getByTestId('dot-separator')).toBeDefined();
  });

  it('should have triangle shape once border type is shaped', () => {
    expect(getByTestId('triangle-shape')).toBeDefined();
  });

  it('should execute onItemPress function', () => {
    fireEvent(getByTestId('item-button'), 'press');
    expect(onItemPress).toHaveBeenCalledWith(undefined);
  });

  it('should execute onAddPress function', () => {
    fireEvent(getByTestId('add-button'), 'press');
    expect(onAddPress).toHaveBeenCalledWith(undefined);
  });
});
