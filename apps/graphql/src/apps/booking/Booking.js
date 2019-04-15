// @flow

import ItineraryInterface from '../itinerary/types/outputs/ItineraryInterface';
import type { Passenger } from '../manageMyBooking/manageMyBooking';

export type HoldBags = {|
  +flightID: string,
  +first: number,
  +second: number,
  +third: number,
|};

export type SaveBookingPayloadType = {|
  +bookingToken: string,
  +bags: number,
  +passengers: $ReadOnlyArray<Passenger>,
  +paymentGateway?: string,
  +language?: string,
  +locale?: string,
|};

export type SaveBookingOutputType = {|
  +transactionId: string,
  +itinerary: ItineraryInterface,
  +passengers: $ReadOnlyArray<Passenger>,
|};

export type ConfirmPaymentPayloadType = {|
  +bookingToken?: string,
  +transactionId: string,
|};

export type ConfirmPaymentOutputType = {|
  +isSuccess: boolean,
  +price: number,
|};

export type ConfirmPaymentAPIResponse = {|
  +status: number,
  +price: number,
|};
