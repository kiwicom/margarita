// @flow

import {
  addMonths,
  subMonths,
  getMonth,
  getYear,
  eachDayOfInterval,
  endOfMonth,
  isSameYear,
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
  differenceInDays,
  lastDayOfMonth,
} from 'date-fns';
import isEqual from 'react-fast-compare';
import { sortWith, ascend, prop, unnest } from 'ramda';

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
export const spaceBetweenMonths = 55;
const touchBufferRatio = 0.5;

type SetProperDateIntervalArguments = {|
  +grabbedSide: GrabbedSideType,
  +newDateWithXYShift: Date,
  +grabbedStartDay: Date,
  +selectedDates: $ReadOnlyArray<Date>,
|};

export const getWeekArrayOfSpecificDate = (
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
    getWeekArrayOfSpecificDate(weekDay, weekStartsOn).map(day =>
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
  new Array(Math.abs(numberOfMonths)).fill(undefined).map((_, index) => {
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

export const checkIfMoveIsCorrectInNeighbourhood = ({
  neighbourhood,
  startDay,
  direction,
  steps,
}: {
  neighbourhood: Array<AnotatedMonthType>,
  startDay: Date,
  direction: 'next' | 'prev',
  steps: number,
}) => {
  const neighbourhoodSortedByDate = sortWith([
    ascend(prop('year')),
    ascend(prop('month')),
  ])(neighbourhood);
  const allDays = neighbourhoodSortedByDate.reduce((acc, current) => {
    return [...acc, ...unnest(current.weeks)];
  }, []);
  const startDayIndex = allDays.indexOf(startDay);
  return allDays[startDayIndex + steps * (direction === 'prev' ? -1 : 1)];
};

export const generateNeighbourhood = (
  grabbedStartDay: Date,
  fingerRelativePosition: { x: number, y: number },
  dayItemSize: DayItemSizeType,
  weekStartsOn: WeekStartsType,
) => {
  // @TODO Optimise this function to not generate neighbourhood every time
  const isDraggingUp = fingerRelativePosition.y < 0;
  const whichMonthsToRender = isDraggingUp ? 'prev' : 'next';
  const neighbourhood = getMonths(
    howManyMonthsToRender(fingerRelativePosition.y, dayItemSize),
    weekStartsOn,
    whichMonthsToRender,
    grabbedStartDay,
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
  fingerRelativePositionY: number,
  dayItemSize: DayItemSizeType,
) => {
  const months =
    Math.abs(fingerRelativePositionY) /
    dayItemSize.height /
    minimalNumberOfLinesInMonth;
  return Math.ceil(months) + 1;
};

export const restOfMonthHeightInVerticalDirection = ({
  month,
  dayItemSize,
  isDraggingUp,
  weekIndex,
}: {
  month: AnotatedMonthType,
  dayItemSize: DayItemSizeType,
  isDraggingUp: boolean,
  weekIndex: number,
}) =>
  isDraggingUp
    ? weekIndex * dayItemSize.height + getTouchBuffer(dayItemSize.height)
    : (month.weeks.length - weekIndex - 1) * dayItemSize.height +
      getTouchBuffer(dayItemSize.height);

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
  const fingerYPositionWithoutCurrentMonth =
    Math.abs(fingerRelativePosition.y) -
    restOfMonthHeightInVerticalDirection({
      month: months[monthIndex],
      dayItemSize,
      isDraggingUp,
      weekIndex,
    });

  // @TODO je touchBuffer třeba?
  const isShiftOnlyInsideOfCurrentMonth =
    fingerYPositionWithoutCurrentMonth < spaceBetweenMonths + touchBuffer;

  if (isShiftOnlyInsideOfCurrentMonth) {
    console.log('tady');
    return 0;
  }
  // @TODO end

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

export const setProperDateInterval = ({
  grabbedSide,
  newDateWithXYShift,
  grabbedStartDay,
  selectedDates,
}: SetProperDateIntervalArguments) => {
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

export const fingerYPositionInSpaceBetweenMonths = ({
  fingerRelativePosition,
  month,
  dayItemSize,
  isDraggingUp,
  weekIndex,
}: {
  fingerRelativePosition: { x: number, y: number },
  month: AnotatedMonthType,
  dayItemSize: DayItemSizeType,
  isDraggingUp: boolean,
  weekIndex: number,
}) => {
  const touchBuffer = getTouchBuffer(dayItemSize.height);
  const fingerYPositionWithoutCurrentMonth =
    Math.abs(fingerRelativePosition.y) -
    restOfMonthHeightInVerticalDirection({
      month,
      dayItemSize,
      isDraggingUp,
      weekIndex,
    });
  if (
    fingerYPositionWithoutCurrentMonth > 0 &&
    fingerYPositionWithoutCurrentMonth < spaceBetweenMonths + touchBuffer
  ) {
    return fingerYPositionWithoutCurrentMonth;
  }
  return false;
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
          // console.log(
          //   getNumberOfMonthsCrossedByFinger(
          //     fingerRelativePosition,
          //     neigbourhoodMatrix,
          //     monthIndex,
          //     weekIndex,
          //     dayItemSize,
          //   ),
          // );
          const monthSpaces =
            getNumberOfMonthsCrossedByFinger(
              fingerRelativePosition,
              neigbourhoodMatrix,
              monthIndex,
              weekIndex,
              dayItemSize,
            ) *
            (spaceBetweenMonths + touchBuffer);

          // console.log('monthSpaces', monthSpaces);

          const isDraggingUp = fingerRelativePosition.y < 0;
          const yPositionBetweenMonths = fingerYPositionInSpaceBetweenMonths({
            month,
            dayItemSize,
            isDraggingUp,
            weekIndex,
            fingerRelativePosition,
          });

          const shift = {
            x: Math.floor(
              fingerRelativePosition.x / dayItemSize.width + touchBufferRatio,
            ),
            y: Math.floor(
              (fingerRelativePosition.y - monthSpaces) / dayItemSize.height +
                touchBufferRatio,
            ),
          };
          // console.log(
          //   fingerRelativePosition.y,
          //   monthSpaces,
          //   dayItemSize.height,
          // );

          const newDateWithXShift = addDays(grabbedStartDay, shift.x);
          let newDateWithXYShift = addWeeks(newDateWithXShift, shift.y);

          const steppedDays = differenceInDays(
            newDateWithXYShift,
            controlledDay,
          );
          if (yPositionBetweenMonths) {
            if (getMonth(newDateWithXYShift) > month.month) {
              newDateWithXYShift = lastDayOfMonth(controlledDay);
            }
            if (getMonth(newDateWithXYShift) < month.month) {
              console.log(
                month.year,
                month.month,
                new Date(month.year, month.month, 0),
              );
              newDateWithXYShift = new Date(month.year, month.month, 1);
            }
            console.log('----');
          }

          const isMoveCorrect = checkIfMoveIsCorrectInNeighbourhood({
            neighbourhood: neigbourhoodMatrix,
            startDay: controlledDay,
            direction: isDraggingUp ? 'prev' : 'next',
            steps: steppedDays,
          });

          if (!isMoveCorrect) {
            console.log('||||');
            if (isDraggingUp) {
              newDateWithXYShift = new Date(month.year, month.month, 1);
            } else {
              newDateWithXYShift = lastDayOfMonth(controlledDay);
            }
          }

          if (
            isSameDay(newDateWithXYShift, selectedDates[0]) &&
            isSameDay(newDateWithXYShift, selectedDates[1])
          ) {
            return null;
          }

          const newSelectedDate = setProperDateInterval({
            grabbedSide,
            newDateWithXYShift,
            grabbedStartDay,
            selectedDates,
          });

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
