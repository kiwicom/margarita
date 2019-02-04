/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingBadges$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Booking$ref: FragmentReference;
export type Booking = {|
  +destinationImageUrl: ?string,
  +relayId: string,
  +$fragmentRefs: BookingBadges$ref,
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
      "kind": "FragmentSpread",
      "name": "BookingBadges",
      "args": null
    },
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e056e0381b6715f200465b18d20e0009';
module.exports = node;
