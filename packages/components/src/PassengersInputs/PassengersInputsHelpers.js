// @flow

import type { State } from './PassengersInputs';

const MAX_PASSENGERS: number = 9;

export const updateAdults = (prevState: State, value: number) => {
  const adults = Math.max(
    1,
    Math.min(prevState.adults + value, MAX_PASSENGERS - prevState.infants),
  );
  return {
    adults,
    infants: Math.min(prevState.infants, adults),
    bags: Math.min(prevState.bags, adults * 2),
  };
};

export const updateInfants = (prevState: State, value: number) => {
  return {
    infants: Math.max(
      0,
      Math.min(
        prevState.infants + value,
        prevState.adults,
        MAX_PASSENGERS - prevState.adults,
      ),
    ),
  };
};

export const updateBags = (prevState: State, value: number) => {
  return {
    bags: Math.max(0, Math.min(prevState.bags + value, prevState.adults * 2)),
  };
};

export const getMaxAdults = (state: State) => MAX_PASSENGERS - state.infants;
export const getMaxInfants = (state: State) =>
  Math.min(state.adults, MAX_PASSENGERS - state.adults);
export const getMaxBags = (state: State) => state.adults * 2;
