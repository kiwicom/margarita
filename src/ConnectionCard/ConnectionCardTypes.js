// @flow

import type { CarrierData } from '../CarrierLogo/CarrierLogoTypes';

export type TripSectorProps = {|
  +arrival: string,
  +arrivalTime: string,
  +carrier: CarrierData,
  +tripDate: string,
  +departure: string,
  +departureTime: string,
  +duration: string,
|};
