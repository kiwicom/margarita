// @flow

import {
  getPreviousMonthData,
  getNextMonthData,
  getStartOfDayTime,
} from '../DatePickerHelpers';

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

  test('getStartOfDayTime > should reset date time to start of the day', () => {
    const testDay = new Date(2019, 0, 1, 10, 32, 5, 12);
    const resultTime = new Date(2019, 0, 1).getTime();
    expect(getStartOfDayTime(testDay)).toBe(resultTime);
  });
});
