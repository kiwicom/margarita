/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingBadges$ref = any;
type DateAndPassengerCount$ref = any;
type FromTo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Booking$ref: FragmentReference;
export type Booking = {|
  +destinationImageUrl: ?string,
  +relayId: string,
  +$fragmentRefs: BookingBadges$ref & FromTo$ref & DateAndPassengerCount$ref,
  +$refType: Booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Booking",
  "type": "CustomerBooking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "destinationImageUrl",
      "args": [
        {
          "kind": "Literal",
          "name": "dimensions",
          "value": "_1200x628",
          "type": "BookingDestinationImageDimensions"
        }
      ],
      "storageKey": "destinationImageUrl(dimensions:\"_1200x628\")"
    },
    {
      "kind": "ScalarField",
      "alias": "relayId",
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BookingBadges",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FromTo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DateAndPassengerCount",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a488c3731a12449dc244b228f41c80f8';
module.exports = node;
