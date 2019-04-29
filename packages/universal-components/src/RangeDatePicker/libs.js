// @flow

import {
  addMonths,
  subMonths,
  getMonth,
  getYear,
  eachDayOfInterval,
  endOfMonth,
  isSameMonth,
  startOfMonth,
  eachWeekOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  isBefore,
  isAfter,
  addWeeks,
  isSameDay,
  getWeeksInMonth,
} from 'date-fns';
import isEqual from 'react-fast-compare';

import type {
  AnotatedMonthType,
  WeekStartsType,
  MonthDateType,
  DayItemSizeType,
  GrabbedSideType,
  FindRelatedItemConfigType,
} from './RangeDatePickerTypes';
import type { OnDragEvent } from '../types';

const minimalNumberOfLinesInMonth = 4;
export const spaceBetweenMonths = 60;
const touchBufferRatio = 0.5;

// @TODO add tests

export const getCurrentWeekArray = (
  day: Date,
  weekStartsOn: WeekStartsType,
) => {
  return eachDayOfInterval({
    start: startOfWeek(day, { weekStartsOn }),
    end: endOfWeek(day, { weekStartsOn }),
  });
};

export const getMonthMatrix = (
  { year, month }: MonthDateType,
  weekStartsOn: WeekStartsType,
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
  return matrix.map<Array<?Date>>(weekDay =>
    getCurrentWeekArray(weekDay, weekStartsOn).map(day =>
      convertDate(day, {
        isSameMonth: isSameMonth(date, day),
      }),
    ),
  );
};

export const getMonths = (
  numberOfMonths: number,
  weekStartsOn: WeekStartsType,
  whichMonthsToRender: 'prev' | 'next' = 'next',
  startDate: Date = new Date(),
): Array<MonthDateType> =>
  new Array(numberOfMonths).fill(undefined).map((_, index) => {
    const newMonth =
      whichMonthsToRender === 'prev'
        ? subMonths(startDate, numberOfMonths - 1 - index)
        : addMonths(startDate, index);

    return {
      month: getMonth(newMonth),
      year: getYear(newMonth),
      numberOfWeeks: getWeeksInMonth(newMonth, { weekStartsOn: weekStartsOn }),
    };
  });

export const isDayInPast = (checkedDay: ?Date) =>
  checkedDay && isBefore(checkedDay, new Date());

export const generateNeighbourhood = (
  day: Date,
  fingerRelativePosition: { x: number, y: number },
  dayItemSize: DayItemSizeType,
  weekStartsOn: WeekStartsType,
) => {
  // @TODO Optimise this function to not generate neighbourhood every time
  const whichMonthsToRender = fingerRelativePosition.y > 0 ? 'prev' : 'next';
  const neighbourhood = getMonths(
    howManyMonthsToRender(fingerRelativePosition, dayItemSize),
    weekStartsOn,
    whichMonthsToRender,
    day,
  ).map<AnotatedMonthType>(item => ({
    year: item.year,
    month: item.month,
    numberOfWeeks: item.numberOfWeeks,
    weeks: getMonthMatrix(item, weekStartsOn, (day, { isSameMonth }) =>
      isSameMonth ? new Date(day) : null,
    ),
  }));
  return neighbourhood;
};

export const howManyMonthsToRender = (
  fingerRelativePosition: {
    x: number,
    y: number,
  },
  dayItemSize: DayItemSizeType,
) => {
  const vectorSize = Math.sqrt(
    Math.pow(fingerRelativePosition.x, 2) +
      Math.pow(fingerRelativePosition.y, 2),
  );
  return Math.ceil(
    vectorSize / dayItemSize.height / minimalNumberOfLinesInMonth,
  );
};

export const getNumberOfMonthsCrossedByFinger = (
  fingerRelativePosition: { x: number, y: number },
  months: Array<AnotatedMonthType>,
  monthIndex: number,
  weekIndex: number,
  dayItemSize: DayItemSizeType,
) => {
  const touchBuffer = getTouchBuffer(dayItemSize.height);
  const isDraggingUp = fingerRelativePosition.y < 0;
  const properSign = isDraggingUp ? -1 : 1;
  const fingerYPositionWithoutCurrentMonth = isDraggingUp
    ? Math.abs(fingerRelativePosition.y) - weekIndex * dayItemSize.height
    : Math.abs(fingerRelativePosition.y) -
      (months[monthIndex].weeks.length - weekIndex - 1) * dayItemSize.height;

  const isShiftOnlyInsideOfCurrentMonth =
    fingerYPositionWithoutCurrentMonth < spaceBetweenMonths + touchBuffer;

  if (isShiftOnlyInsideOfCurrentMonth) {
    return 0;
  }
  // @TODO Optimise case when user is dragging between borders of the particular months. It should mark only the first/last day of the month.

  const monthSpacesOrder = isDraggingUp
    ? months.slice(0, monthIndex).reverse()
    : months.slice(monthIndex);

  const monthSpacesInfo = monthSpacesOrder.reduce(
    (acc, month) => {
      if (
        month.weeks.length * dayItemSize.height +
          (spaceBetweenMonths + touchBuffer) <
        acc.pixelsToCheckLeft
      ) {
        return {
          pixelsToCheckLeft:
            acc.pixelsToCheckLeft - (spaceBetweenMonths + touchBuffer),
          numberOfMonthsCrossed: acc.numberOfMonthsCrossed + 1,
        };
      }
      return acc;
    },
    {
      pixelsToCheckLeft: fingerYPositionWithoutCurrentMonth,
      numberOfMonthsCrossed: 1,
    },
  );

  return properSign * monthSpacesInfo.numberOfMonthsCrossed;
};

export const getTouchBuffer = (dayItemHeight: number) =>
  dayItemHeight * touchBufferRatio;

export const setProperDateInterval = (
  grabbedSide: GrabbedSideType,
  newDateWithXYShift: Date,
  grabbedStartDay: Date,
  selectedDates: $ReadOnlyArray<Date>,
) => {
  if (grabbedSide === 'left') {
    if (isBefore(newDateWithXYShift, grabbedStartDay)) {
      return [newDateWithXYShift, selectedDates[1]];
    } else if (isBefore(newDateWithXYShift, selectedDates[1])) {
      return [newDateWithXYShift, selectedDates[1]];
    } else if (isSameDay(newDateWithXYShift, selectedDates[1])) {
      return [selectedDates[1], selectedDates[1]];
    }
    return [selectedDates[1], newDateWithXYShift];
  } else if (isAfter(newDateWithXYShift, grabbedStartDay)) {
    return [selectedDates[0], newDateWithXYShift];
  } else if (isAfter(newDateWithXYShift, selectedDates[0])) {
    return [selectedDates[0], newDateWithXYShift];
  } else if (isSameDay(newDateWithXYShift, selectedDates[0])) {
    return [selectedDates[0], selectedDates[0]];
  }
  return [newDateWithXYShift, selectedDates[0]];
};

export const findRelatedItem = (
  event: OnDragEvent,
  config: FindRelatedItemConfigType,
  callback: (Array<Date>) => void,
) => {
  const {
    grabbedStartDay,
    selectedDates,
    dayItemSize,
    grabbedSide,
    weekStartsOn,
  } = config;

  const touchBuffer = getTouchBuffer(dayItemSize.height);
  const fingerRelativePosition = {
    x: event.nativeEvent.translationX,
    y: event.nativeEvent.translationY,
  };

  const neigbourhoodMatrix = generateNeighbourhood(
    grabbedStartDay,
    fingerRelativePosition,
    dayItemSize,
    weekStartsOn,
  );

  neigbourhoodMatrix.map((month, monthIndex) => {
    month.weeks.map((week, weekIndex) => {
      week.map(controlledDay => {
        if (controlledDay && isSameDay(controlledDay, grabbedStartDay)) {
          const monthSpaces =
            getNumberOfMonthsCrossedByFinger(
              fingerRelativePosition,
              neigbourhoodMatrix,
              monthIndex,
              weekIndex,
              dayItemSize,
            ) *
            (spaceBetweenMonths + touchBuffer);

          const shift = {
            x: Math.floor(
              fingerRelativePosition.x / dayItemSize.width + touchBufferRatio,
            ),
            y: Math.floor(
              (fingerRelativePosition.y - monthSpaces) / dayItemSize.height +
                touchBufferRatio,
            ),
          };
          const newDateWithXShift = addDays(grabbedStartDay, shift.x);
          const newDateWithXYShift = addWeeks(newDateWithXShift, shift.y);

          if (
            isSameDay(newDateWithXYShift, selectedDates[0]) &&
            isSameDay(newDateWithXYShift, selectedDates[1])
          ) {
            return null;
          }

          const newSelectedDate = setProperDateInterval(
            grabbedSide,
            newDateWithXYShift,
            grabbedStartDay,
            selectedDates,
          );

          if (
            !isEqual(selectedDates, newSelectedDate) &&
            !isDayInPast(newDateWithXYShift) &&
            (isBefore(newSelectedDate[0], newSelectedDate[1]) ||
              isSameDay(newSelectedDate[0], newSelectedDate[1]))
          ) {
            callback(newSelectedDate);
          }
        }
        return null;
      });
    });
  });
};
