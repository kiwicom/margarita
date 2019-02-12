/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type TripInfoOneWay$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripDetails$ref: FragmentReference;
export type TripDetails = {|
  +type: ?BookingType,
  +$fragmentRefs: Header$ref & TripInfoOneWay$ref,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '08fa20c31afc5d295aa9b57016daca86';
module.exports = node;
