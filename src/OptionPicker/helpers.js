// @flow

import type { OptionTypeInterface } from './OptionPickerTypes';

export function getOptionsIds(options: OptionTypeInterface[]) {
  return options.reduce((result, option) => {
    let ids = [option.id];
    if (option.subOptions) {
      const subOptions = option.subOptions.map(({ id }) => id);
      ids = [...ids, ...subOptions];
    }

    return [...result, ...ids];
  }, []);
}

export function areSelectedOptionsChanged(
  optionsA: OptionTypeInterface[],
  optionsB: OptionTypeInterface[],
) {
  const optionsIdsB = getOptionsIds(optionsB);
  const optionsIdsA = getOptionsIds(optionsA);

  return (
    optionsIdsA.length !== optionsIdsB.length ||
    !optionsIdsA.every(option => optionsIdsB.includes(option))
  );
}
