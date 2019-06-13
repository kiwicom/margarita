// @flow

import qs from 'qs';
import { generateId } from '@kiwicom/margarita-utils';

import type { Location } from './SearchContextTypes';

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

function createPassneger(type: 'adult' | 'infant') {
  return Object.freeze({
    id: generateId(),
    type,
    name: null,
    lastName: null,
    bags: null,
    passportId: null,
    dateOfBirth: null,
  });
}

// TODO flow types
export function createPassengersStateMiddleware(state) {
  const passengers = ['adults', 'infants'].reduce((acc, type, index) => {
    const singularType = type.slice(0, -1); // adult, infant

    const temp = Array.from({ length: state[type] });
    const newPassengers = temp.map(() => {
      const passenger = createPassneger(singularType);
      return passenger;
    });

    return [...acc, ...newPassengers];
  }, []);

  return { ...state, passengers };
}
