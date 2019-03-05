// @flow

import {
  mapOptionToLocation,
  mapLocationTypeToOptionType,
  filterOptions,
} from '../helpers';
import { mapLocationToOption } from '../PlacePickerContent';

const location = {
  id: 'prague',
  name: 'Prague',
  locationId: 'prague-locationId',
  type: 'destination',
};

const option = {
  id: 'prague',
  label: 'Prague',
  locationId: 'prague-locationId',
  type: 'destination',
};

test('The mapLocationToOption, should map location object to option prop for the OptionPicker.', () => {
  expect(mapLocationToOption(location)).toEqual(option);
});

test('The mapOptionToLocation, should map option object to location object.', () => {
  expect(mapOptionToLocation(option)).toEqual(location);
});

test('The mapLocationTypeToOptionType, should map the location type  to the option type.', () => {
  expect(mapLocationTypeToOptionType('BUS_STATION')).toEqual('bus');
  expect(mapLocationTypeToOptionType('AIRPORT')).toEqual('airplane');
  expect(mapLocationTypeToOptionType('STATION')).toEqual('train');
  expect(mapLocationTypeToOptionType('others')).toEqual('destination');
});

test('The filterOptions function, should filter out selected options.', () => {
  const options = [
    {
      id: 'prague',
      label: 'Prague',
      locationId: 'prague-locationId',
      type: 'destination',
    },
    {
      id: 'oslo',
      label: 'Oslo',
      locationId: 'oslo-locationId',
      type: 'destination',
    },
  ];

  expect(filterOptions(options, options)).toEqual([]);
  expect(filterOptions(options, [options[0]])).toEqual([options[1]]);
  expect(filterOptions(options, [options[1]])).toEqual([options[0]]);
});
