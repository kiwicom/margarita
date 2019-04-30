/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Carriers_data$ref = any;
type FlightTimes_data$ref = any;
type LocalTime_data$ref = any;
type TripCities_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSector_data$ref: FragmentReference;
declare export opaque type TripSector_data$fragmentType: TripSector_data$ref;
export type TripSector_data = {|
  +duration: ?number,
  +departure: ?{|
    +$fragmentRefs: LocalTime_data$ref
  |},
  +$fragmentRefs: FlightTimes_data$ref & TripCities_data$ref & Carriers_data$ref,
  +$refType: TripSector_data$ref,
|};
export type TripSector_data$data = TripSector_data;
export type TripSector_data$key = {
  +$data?: TripSector_data$data,
  +$fragmentRefs: TripSector_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripSector_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "LocalTime_data",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "FlightTimes_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripCities_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Carriers_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a7d7bbe62b8821991bad18c06845062f';
module.exports = node;
