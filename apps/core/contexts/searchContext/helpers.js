// @flow

import qs from 'qs';
import { generateId } from '@kiwicom/margarita-utils';

import type { Location, PassengerType } from './SearchContextTypes';

type ParserType = 'Location' | 'Date' | 'number' | 'string' | 'boolean';

const PARSER_CONFIG = {
  travelFrom: 'Location',
  travelTo: 'Location',
  travelFromName: 'string',
  travelToName: 'string',
  sortBy: 'string', // @TODO create sortParser
  limit: 'number',
  adults: 'number',
  infants: 'number',
  dateFrom: 'Date',
  dateTo: 'Date',
  returnDateFrom: 'Date',
  returnDateTo: 'Date',
  bookingToken: 'string',
  tripType: 'string',
  nightsInDestinationFrom: 'number',
  nightsInDestinationTo: 'number',
  isNightsInDestinationSelected: 'boolean',
};

// @TODO improve flow
export function parseURLqueryToState(query: Object) {
  const queryKeys = Object.keys(query);

  return queryKeys.reduce((acc, key) => {
    const parserType = PARSER_CONFIG[key];
    if (parserType) {
      const parser = getParser(parserType);

      return { [key]: parser(query[key]), ...acc };
    }
    /* eslint-disable-next-line no-console */
    console.warn(`Unexpected URL parameter "${key}" have been detected`);
    return acc;
  }, {});
}

function getParser(parserType: ParserType) {
  switch (parserType) {
    case 'Location': {
      return locationParser;
    }
    case 'Date': {
      return dateParser;
    }
    case 'string': {
      return stringParser;
    }
    case 'number': {
      return numberParser;
    }
    case 'boolean': {
      return booleanParser;
    }
    default: {
      return (value: any) => value;
    }
  }
}

export function locationParser(query: string) {
  // @TODO Location validation
  const locationsObject = qs.parse(query);
  const locationsArray = Object.keys(locationsObject).map<Location>(
    key => locationsObject[key],
  );
  return locationsArray;
}

function dateParser(date: string) {
  // @TODO input validation
  return new Date(date);
}

function numberParser(number: number | string) {
  // @TODO input validation
  return parseInt(number, 10);
}

function stringParser(string: string) {
  // @TODO input validation
  return string;
}

function booleanParser(boolean: boolean) {
  // @TODO input validation
  return boolean;
}

function createPassenger(type: 'adult' | 'infant'): PassengerType {
  return Object.freeze({
    id: generateId(),
    type,
    name: null,
    lastName: null,
    bags: null,
    passportId: null,
    dateOfBirth: null,
    gender: null,
    nationality: null,
  });
}

type PassengersCount = {|
  +adults?: number,
  +infants?: number,
|};

export function createPassengers(
  passengersCount: PassengersCount,
): PassengerType[] {
  return ['adults', 'infants'].reduce((acc, type) => {
    // $FlowFixMe - flow doesn't know to recognize that the type is an enum (adult | infant)
    const singularType: 'infant' | 'adult' = type.slice(0, -1);

    const temp = Array.from({ length: passengersCount[type] || 0 });
    const newPassengers = temp.map(() => {
      const passenger = createPassenger(singularType);
      return passenger;
    });

    return [...acc, ...newPassengers];
  }, []);
}

// @TODO improve flow
export function createPassengersStateMiddleware(state: Object) {
  const { adults, infants } = state;
  if (Number.isInteger(adults)) {
    return { ...state, passengers: createPassengers({ adults, infants }) };
  }
  return state;
}
