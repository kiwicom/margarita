// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { Stepper } from '..';

import StepperButton from '../StepperButton';

describe('Stepper', () => {
  const showNumber = true;
  const numberStyle = {
    paddingHorizontal: 20,
    fontSize: 16,
  };
  const disableIncrement = false;
  const disableDecrement = false;
  const min = -2;
  const max = 2;
  const defaultNumber = 0;
  const onDecrement = jest.fn();
  const onIncrement = jest.fn();

  it('should match the snapshot', () => {
    const { output } = shallow(
      <Stepper
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        showNumber={showNumber}
        numberStyle={numberStyle}
        disableDecrement={disableDecrement}
        disableIncrement={disableIncrement}
        min={min}
        max={max}
        number={defaultNumber}
      />,
    );
    expect(output).toMatchSnapshot();
  });

  it('should have buttons disabled when min, max and number is zero', () => {
    const { getAllByProps } = render(
      <Stepper
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        min={0}
        max={0}
        number={0}
      />,
    );
    expect(
      getAllByProps({
        touchable: false,
      }),
    ).toHaveLength(2);
  });

  it('should have buttons enabled when min, max is set to null', () => {
    const { getAllByProps } = render(
      // $FlowFixMe - flow disabled to test 'null' edge case
      <Stepper
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        min={null}
        max={null}
        number={0}
      />,
    );
    expect(
      getAllByProps({
        touchable: true,
      }),
    ).toHaveLength(2);
  });

  it('should have buttons enabled when min, max is not set', () => {
    const { getAllByProps } = render(
      <Stepper
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        number={0}
      />,
    );
    expect(
      getAllByProps({
        touchable: true,
      }),
    ).toHaveLength(2);
  });

  const { getByText, getByType, getAllByType, getAllByProps } = render(
    <Stepper
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      showNumber={showNumber}
      numberStyle={numberStyle}
      disableDecrement={disableDecrement}
      disableIncrement={disableIncrement}
      min={min}
      max={max}
      number={defaultNumber}
    />,
  );

  it('should have two stepper buttons', () => {
    expect(getAllByType(StepperButton)).toHaveLength(2);
  });

  it('should display the current value', () => {
    expect(getByText(new RegExp(defaultNumber.toString()))).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        onDecrement,
        onIncrement,
        showNumber,
        numberStyle,
        disableDecrement,
        disableIncrement,
        min,
        max,
        number: defaultNumber,
      }),
    ).toBeDefined();
  });

  it('should execute onIncrement method', () => {
    fireEvent(getByType(Stepper), 'increment');
  });

  it('should execute onDecrement method', () => {
    fireEvent(getByType(Stepper), 'decrement');
  });

  it('should match snapshot diff between small and normal input', () => {
    const normal = (
      <Stepper onDecrement={jest.fn()} onIncrement={jest.fn()} number={0} />
    );
    const numberNotDisplayed = (
      <Stepper
        onDecrement={jest.fn()}
        onIncrement={jest.fn()}
        number={0}
        showNumber={false}
      />
    );

    expect(
      snapshotDiff(normal, numberNotDisplayed, { contextLines: 1 }),
    ).toMatchSnapshot();
  });
});
