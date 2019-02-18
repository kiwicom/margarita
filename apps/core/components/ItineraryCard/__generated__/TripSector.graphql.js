/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FlightTimes$ref = any;
type LocalTime$ref = any;
type Transporters$ref = any;
type TripCities$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSector$ref: FragmentReference;
export type TripSector = {|
  +duration: ?number,
  +departure: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +$fragmentRefs: FlightTimes$ref & TripCities$ref & Transporters$ref,
  +$refType: TripSector$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripSector",
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
      "name": "FlightTimes",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripCities",
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
          "name": "LocalTime",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Transporters",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3ea02fcf25ec9f5f4fc17d21b2026659';
module.exports = node;
