// @flow strict

// test immutability
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const getUTCYearMonthDate = (date: Date) => ({
  year: date.getUTCFullYear(),
  month: date.getUTCMonth(),
  date: date.getUTCDate(),
});

const toUTCDate = (inDate: Date) => {
  const { year, month, date } = getUTCYearMonthDate(inDate);
  return new Date(Date.UTC(year, month, date));
};

const toUTCFullDate = (inDate: Date) =>
  new Date(
    Date.UTC(
      inDate.getFullYear(),
      inDate.getMonth(),
      inDate.getDate(),
      inDate.getHours(),
      inDate.getMinutes(),
      inDate.getSeconds(),
      inDate.getMilliseconds()
    )
  );

const getUTCNow = () => {
  const now = new Date();
  return new Date(
    Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    )
  );
};

function DateUtils(rawDate: Date = getUTCNow()) {
  return {
    addDays: (count: number) => addDays(rawDate, count),
  };
}

/**
 * Positive if A is later than B.
 * Negative if A is sooner than B.
 * ZERO for the same dates.
 *
 */
DateUtils.diffInDays = (higherDate: Date, lowerDate: Date) => {
  const diffMs = toUTCDate(higherDate) - toUTCDate(lowerDate);
  const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

  return diffMs / ONE_DAY_IN_MS;
};

/**
 * Positive if A is later than B.
 * Negative if A is sooner than B.
 * ZERO for the same dates.
 *
 */
DateUtils.diffInHours = (higherDate: Date, lowerDate: Date) => {
  const diffMs = toUTCFullDate(higherDate) - toUTCFullDate(lowerDate);
  const ONE_HOUR_IN_MS = 1000 * 60 * 60;
  return diffMs / ONE_HOUR_IN_MS;
};

DateUtils.isSameDay = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year === second.year &&
    first.month === second.month &&
    first.date === second.date
  );
};

DateUtils.isAfterDate = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year > second.year ||
    (first.year === second.year && first.month > second.month) ||
    (first.year === second.year &&
      first.month === second.month &&
      first.date > second.date)
  );
};

DateUtils.isBeforeDate = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year < second.year ||
    (first.year === second.year && first.month < second.month) ||
    (first.year === second.year &&
      first.month === second.month &&
      first.date < second.date)
  );
};

DateUtils.getUTCToday = () => {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
};

DateUtils.getUTCNow = getUTCNow;

DateUtils.latestTimeOfDay = (day: Date) => {
  const { year, month, date } = getUTCYearMonthDate(day);
  return new Date(Date.UTC(year, month, date, 23, 59, 59, 999));
};

export default DateUtils;
