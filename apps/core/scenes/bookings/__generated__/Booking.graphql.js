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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6bd96119d2a4e343ef52e79754ef39cb';
module.exports = node;
