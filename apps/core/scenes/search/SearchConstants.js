// @flow
import { translate } from '@kiwicom/margarita-localization';
export const TRIP_TYPE = {
  Return: {
    icon: 'flight-return',
    label: translate('Return'),
  },
  OneWay: {
    icon: 'flight-direct',
    label: translate('One way'),
  },
};

export const PLACE_TYPE = {
  ORIGIN: 'ORIGIN',
  DESTINATION: 'DESTINATION',
};

export const FORM_MODE = {
  TRIP_TYPE: 'TRIP_TYPE',
  PASSENGERS: 'PASSENGERS',
};

export type PlaceType = $Keys<typeof PLACE_TYPE>;
export type FormMode = $Keys<typeof FORM_MODE>;
