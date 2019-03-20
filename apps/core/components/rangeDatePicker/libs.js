// @flow

import {
  addMonths,
  getMonth,
  getYear,
  eachDayOfInterval,
  endOfISOWeek,
  endOfMonth,
  isSameMonth,
  startOfISOWeek,
  startOfMonth,
  eachWeekOfInterval,
} from 'date-fns';

export type MonthDate = {|
  year: number,
  month: number,
|};

export type MonthsData = {|
  weeks: Array<Array<Date>>,
  ...MonthDate,
|};

// @TODO add tests
export const getMonthsData = (
  numberOfRenderedMonths: number,
): Array<MonthsData> => {
  const months = getNextMonths(numberOfRenderedMonths);
  return months.map(monthObject => ({
    ...monthObject,
    weeks: getMonthMatrix(monthObject, (day, { isSameMonth }) =>
      isSameMonth ? new Date(day) : null,
    ),
  }));
};

export const getMonthMatrix = (
  { year, month }: MonthDate,
  convertDate: (Date, Object) => ?Date,
) => {
  const date = new Date(year, month);
  const matrix = eachWeekOfInterval(
    {
      start: startOfMonth(date),
      end: endOfMonth(date),
    },
    { weekStartsOn: 1 },
  );
  return matrix.map<Array<any>>(weekDay =>
    eachDayOfInterval({
      start: startOfISOWeek(weekDay),
      end: endOfISOWeek(weekDay),
    }).map(day =>
      convertDate(day, {
        isSameMonth: isSameMonth(date, day),
      }),
    ),
  );
};

export const getNextMonths = (numberOfMonths: number): Array<MonthDate> =>
  new Array(numberOfMonths).fill(undefined).map((_, index) => {
    const newMonth = addMonths(new Date(), index);

    return {
      month: getMonth(newMonth),
      year: getYear(newMonth),
    };
  });
