// @flow

import {
  getMonths,
  getMonthMatrix,
  getWeekArrayOfSpecificDate,
  generateNeighbourhood,
  howManyMonthsToRender,
  getNumberOfMonthsCrossedByFinger,
  setProperDateInterval,
  spaceBetweenMonths,
  getTouchBuffer,
} from '../libs';
import { may, june, july } from '../datasets/monthsWithDistributedWeeks';

const weekStartsOnSunday = 0;
const weekStartsOnMonday = 1;
const dayItemSize = { width: 51, height: 52 };
const shortNeighbourhood = [
  {
    month: 4,
    numberOfWeeks: 5,
    weeks: may,
    year: 2019,
  },
  {
    month: 5,
    numberOfWeeks: 5,
    weeks: june,
    year: 2019,
  },
];
const longNeighbourhood = [
  ...shortNeighbourhood,
  {
    month: 6,
    numberOfWeeks: 5,
    weeks: july,
    year: 2019,
  },
];

describe('RangeDatePicker ', () => {
  it('getWeekArrayOfSpecificDate should get proper array of dates', () => {
    const value = getWeekArrayOfSpecificDate(
      new Date(2019, 4, 1),
      weekStartsOnMonday,
    );
    expect(value).toMatchObject([
      new Date(2019, 3, 29),
      new Date(2019, 3, 30),
      new Date(2019, 4, 1),
      new Date(2019, 4, 2),
      new Date(2019, 4, 3),
      new Date(2019, 4, 4),
      new Date(2019, 4, 5),
    ]);
  });

  it('getMonthMatrix should get proper 2D array of dates in specific month distributed by weeks', () => {
    const value = getMonthMatrix(
      {
        month: 4,
        numberOfWeeks: 5,
        year: 2019,
      },
      weekStartsOnMonday,
      (day, { isSameMonth }) => (isSameMonth ? new Date(day) : null),
    );
    expect(value).toMatchObject(may);
  });

  it('getMonths should get array of info about previous or next months', () => {
    const prevMonths = getMonths({
      numberOfRenderedMonths: 4,
      weekStartsOn: weekStartsOnMonday,
      whichMonthsToRender: 'prev',
      renderFirstMonthFrom: new Date(2019, 4, 1),
    });
    const nextMonths = getMonths({
      numberOfRenderedMonths: 2,
      weekStartsOn: weekStartsOnSunday,
      whichMonthsToRender: undefined,
      renderFirstMonthFrom: new Date(2019, 2, 1),
    });
    expect(prevMonths).toMatchObject([
      {
        month: 1,
        numberOfWeeks: 5,
        year: 2019,
      },
      {
        month: 2,
        numberOfWeeks: 5,
        year: 2019,
      },
      {
        month: 3,
        numberOfWeeks: 5,
        year: 2019,
      },
      {
        month: 4,
        numberOfWeeks: 5,
        year: 2019,
      },
    ]);
    expect(nextMonths).toMatchObject([
      {
        month: 2,
        numberOfWeeks: 6,
        year: 2019,
      },
      {
        month: 3,
        numberOfWeeks: 5,
        year: 2019,
      },
    ]);
  });

  it('generateNeighbourhood should get neighbourhood for finger movement', () => {
    const shortBottomNeighbourhood = generateNeighbourhood(
      new Date(2019, 4, 1),
      { x: 123, y: 50 },
      dayItemSize,
      weekStartsOnMonday,
    );

    const longBottomNeighbourhood = generateNeighbourhood(
      new Date(2019, 4, 1),
      { x: -70, y: 260 },
      dayItemSize,
      weekStartsOnMonday,
    );

    const longTopNeighbourhood = generateNeighbourhood(
      new Date(2019, 6, 1),
      { x: -70, y: -260 },
      dayItemSize,
      weekStartsOnMonday,
    );

    expect(shortBottomNeighbourhood).toMatchObject(shortNeighbourhood);
    expect(longBottomNeighbourhood).toMatchObject(longNeighbourhood);
    expect(longTopNeighbourhood).toMatchObject(longNeighbourhood);
  });

  it('howManyMonthsToRender should specify how many months should be rendered', () => {
    const renderTwoMonths = howManyMonthsToRender(
      dayItemSize.height * 2,
      dayItemSize,
    );
    const renderThreeMonths = howManyMonthsToRender(
      dayItemSize.height * 5,
      dayItemSize,
    );
    const renderMinusTwoMonths = howManyMonthsToRender(
      -dayItemSize.height * 2,
      dayItemSize,
    );

    expect(renderTwoMonths).toBe(2);
    expect(renderThreeMonths).toBe(3);
    expect(renderMinusTwoMonths).toBe(2);
  });

  it('getNumberOfMonthsCrossedByFinger should get number of crossed months according to relative finger position', () => {
    const space = spaceBetweenMonths + getTouchBuffer(dayItemSize.height);
    const crossOneMonth = getNumberOfMonthsCrossedByFinger(
      { x: 0, y: 4 * dayItemSize.height },
      longNeighbourhood,
      0,
      2,
      dayItemSize,
    );
    const crossTwoMonths = getNumberOfMonthsCrossedByFinger(
      { x: 0, y: 7 * dayItemSize.height + 2 * space },
      longNeighbourhood,
      0,
      2,
      dayItemSize,
    );
    const crossMinusTwoMonths = getNumberOfMonthsCrossedByFinger(
      { x: 0, y: -9 * dayItemSize.height - 2 * space },
      longNeighbourhood,
      2,
      4,
      dayItemSize,
    );
    expect(crossOneMonth).toBe(1);
    expect(crossTwoMonths).toBe(2);
    expect(crossMinusTwoMonths).toBe(-2);
  });

  it('setProperDateInterval should decide which interval should be used as new selected date', () => {
    const selectedDates = [new Date(2019, 6, 2), new Date(2019, 6, 5)];
    const grabbedLeftSide = {
      grabbedSide: 'left',
      grabbedStartDay: new Date(2019, 6, 2),
      selectedDates,
    };
    const grabbedRightSide = {
      grabbedSide: 'right',
      grabbedStartDay: new Date(2019, 6, 5),
      selectedDates,
    };
    const leftCase1 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 1),
      ...grabbedLeftSide,
    });
    const leftCase2 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 3),
      ...grabbedLeftSide,
    });
    const leftCase3 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 6),
      ...grabbedLeftSide,
    });
    const leftCase4 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 5),
      ...grabbedLeftSide,
    });
    const rightCase1 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 6),
      ...grabbedRightSide,
    });
    const rightCase2 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 4),
      ...grabbedRightSide,
    });
    const rightCase3 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 1),
      ...grabbedRightSide,
    });
    const rightCase4 = setProperDateInterval({
      newDateWithXYShift: new Date(2019, 6, 2),
      ...grabbedRightSide,
    });

    expect(leftCase1).toMatchObject([
      new Date(2019, 6, 1),
      new Date(2019, 6, 5),
    ]);
    expect(leftCase2).toMatchObject([
      new Date(2019, 6, 3),
      new Date(2019, 6, 5),
    ]);
    expect(leftCase3).toMatchObject([
      new Date(2019, 6, 5),
      new Date(2019, 6, 6),
    ]);
    expect(leftCase4).toMatchObject([
      new Date(2019, 6, 5),
      new Date(2019, 6, 5),
    ]);
    expect(rightCase1).toMatchObject([
      new Date(2019, 6, 2),
      new Date(2019, 6, 6),
    ]);
    expect(rightCase2).toMatchObject([
      new Date(2019, 6, 2),
      new Date(2019, 6, 4),
    ]);
    expect(rightCase3).toMatchObject([
      new Date(2019, 6, 1),
      new Date(2019, 6, 2),
    ]);
    expect(rightCase4).toMatchObject([
      new Date(2019, 6, 2),
      new Date(2019, 6, 2),
    ]);
  });
});
