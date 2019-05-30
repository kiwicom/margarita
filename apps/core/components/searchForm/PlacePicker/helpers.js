// @flow

import { type Location } from '../../../contexts/searchContext';

export type OptionType = {
  +id: string | number,
  +locationId?: string,
  +label: string,
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train',
};

export function mapOptionToLocation(option: OptionType): Location {
  return {
    id: option.id,
    name: option.label,
    locationId: option.locationId,
    type: option.type,
  };
}

export function convertLocationTypeToOptionType(type: ?string) {
  switch (type) {
    case 'AIRPORT':
      return 'airplane';
    case 'BUS_STATION':
      return 'bus';
    case 'STATION':
      return 'train';
    default:
      return 'destination';
  }
}

export function filterOptions(options: OptionType[], selected: OptionType[]) {
  const selectedIDs = selected.map(({ id }) => id);

  return options.reduce((acc = [], option) => {
    // check if the option is selected, if yes filter it out
    if (selectedIDs.includes(option.id)) {
      return acc;
    }
    return [...acc, option];
  }, []);
}
