// @flow

import {
  addMonths,
  getMonth,
  getYear,
  eachDayOfInterval,
  endOfMonth,
  isSameMonth,
  startOfMonth,
  eachWeekOfInterval,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

export type MonthDate = {|
  +year: number,
  +month: number,
|};

export type WeekStarts = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getCurrentWeekArray = (day: Date, weekStartsOn: WeekStarts) => {
  return eachDayOfInterval({
    start: startOfWeek(day, { weekStartsOn }),
    end: endOfWeek(day, { weekStartsOn }),
  });
};

export const getMonthMatrix = (
  { year, month }: MonthDate,
  weekStartsOn: WeekStarts,
  convertDate: (Date, Object) => ?Date,
) => {
  const date = new Date(year, month);
  const matrix = eachWeekOfInterval(
    {
      start: startOfMonth(date),
      end: endOfMonth(date),
    },
    { weekStartsOn },
  );
  return matrix.map<Array<any>>(weekDay =>
    getCurrentWeekArray(weekDay, weekStartsOn).map(day =>
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
