// @flow

export const composeDateFromStrings = (
  day: string,
  month: string,
  year: string,
): Date => {
  return new Date(parseFloat(year), parseFloat(month), parseFloat(day));
};
