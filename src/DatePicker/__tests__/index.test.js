// @flow

import { getPreviousMonthData, getNextMonthData } from '../DatePickerHelpers';

describe('DatePicker', () => {
  test('getPreviousMonthData > should decrease month number', () => {
    const state = {
      date: new Date(),
      month: 5,
      year: 2019,
    };
    expect(getPreviousMonthData(state)).toEqual({
      month: 4,
      year: 2019,
    });
  });

  test('getPreviousMonthData > should set month to December and decrease year number', () => {
    const state = {
      date: new Date(),
      month: 0,
      year: 2019,
    };
    expect(getPreviousMonthData(state)).toEqual({
      month: 11,
      year: 2018,
    });
  });

  test('getNextMonthData > should increase month number', () => {
    const state = {
      date: new Date(),
      month: 5,
      year: 2019,
    };
    expect(getNextMonthData(state)).toEqual({
      month: 6,
      year: 2019,
    });
  });

  test('getNextMonthData > should set month to January and increase year number', () => {
    const state = {
      date: new Date(),
      month: 11,
      year: 2019,
    };
    expect(getNextMonthData(state)).toEqual({
      month: 0,
      year: 2020,
    });
  });
});
