/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FlightTimes_data$ref = any;
type LocalTime_data$ref = any;
type Transporters_data$ref = any;
type TripCities_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSector_data$ref: FragmentReference;
export type TripSector_data = {|
  +duration: ?number,
  +departure: ?{|
    +$fragmentRefs: LocalTime_data$ref
  |},
  +$fragmentRefs: FlightTimes_data$ref & TripCities_data$ref & Transporters_data$ref,
  +$refType: TripSector_data$ref,
|};
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
      "name": "Transporters_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '227826a1d3144a4c03e36a7b426c57d0';
module.exports = node;
