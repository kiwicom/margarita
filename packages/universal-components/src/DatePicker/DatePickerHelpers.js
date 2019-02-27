// @flow

type State = {
  date: Date,
  month: number,
  year: number,
};

type MonthSwapResult = {
  month: number,
  year: number,
};

export const getPreviousMonthData = (state: State): MonthSwapResult => {
  const month = state.month === 0 ? 11 : state.month - 1;
  const year = month === 11 ? state.year - 1 : state.year;
  return {
    month,
    year,
  };
};

export const getNextMonthData = (state: State): MonthSwapResult => {
  const month = (state.month + 1) % 12;
  const year = month === 0 ? state.year + 1 : state.year;
  return {
    month,
    year,
  };
};

export const getStartOfDayTime = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
