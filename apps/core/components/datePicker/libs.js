// @flow

import { format, addMonths } from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfISOWeek from 'date-fns/endOfISOWeek';
import endOfMonth from 'date-fns/endOfMonth';
import isSameMonth from 'date-fns/isSameMonth';
import startOfISOWeek from 'date-fns/startOfISOWeek';
import startOfMonth from 'date-fns/startOfMonth';
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval';

export type MonthDate = {|
  year: number,
  month: number,
|};

export const getMonthMatrix = (
  { year, month }: MonthDate,
  convertDate: (Date, Object) => Date | string,
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
      month: parseInt(format(newMonth, 'M'), 10),
      year: parseInt(format(newMonth, 'yyyy'), 10),
    };
  });

// export const getDateMatrix = (
//   year: number,
//   month: number,
//   weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1,
// ) => {
//   const startDate = startOfWeek(new Date(year, month, 1), { weekStartsOn });
//   const rows = 52;
//   const cols = 7;
//   const length = rows * cols;
//   return (
//     Array.from({ length })
//       // create a list of dates
//       .map((_, index) => addDays(startDate, index).getDate())
//       // fold the array into a matrix
//       .reduce(
//         (matrix, current, index, days) =>
//           !(index % cols !== 0)
//             ? [...matrix, days.slice(index, index + cols)]
//             : matrix,
//         [],
//       )
//   );
// };
