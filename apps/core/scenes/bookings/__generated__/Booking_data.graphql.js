/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BookingBadges_data$ref = any;
type DateAndPassengerCount_data$ref = any;
type FromTo_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Booking_data$ref: FragmentReference;
declare export opaque type Booking_data$fragmentType: Booking_data$ref;
export type Booking_data = {|
  +destinationImageUrl: ?string,
  +relayId: string,
  +$fragmentRefs: BookingBadges_data$ref & FromTo_data$ref & DateAndPassengerCount_data$ref,
  +$refType: Booking_data$ref,
|};
export type Booking_data$data = Booking_data;
export type Booking_data$key = {
  +$data?: Booking_data$data,
  +$fragmentRefs: Booking_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Booking_data",
  "type": "BookingInterface",
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
          "value": "_1200x628"
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
      "name": "BookingBadges_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FromTo_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DateAndPassengerCount_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '715cf0e54783645b537d8c2f6003627a';
module.exports = node;
