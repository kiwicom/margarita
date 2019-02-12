/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type TripInfoMulticity$ref = any;
type TripInfoOneWay$ref = any;
type TripInfoReturn$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripDetails$ref: FragmentReference;
export type TripDetails = {|
  +type: ?BookingType,
  +$fragmentRefs: Header$ref & TripInfoOneWay$ref & TripInfoMulticity$ref & TripInfoReturn$ref,
  +$refType: TripDetails$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripDetails",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfoOneWay",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfoMulticity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfoReturn",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '09a882cd52438f6f9bc1d55678f04b67';
module.exports = node;
