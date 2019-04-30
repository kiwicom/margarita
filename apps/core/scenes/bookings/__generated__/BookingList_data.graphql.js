/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Booking_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingList_data$ref: FragmentReference;
declare export opaque type BookingList_data$fragmentType: BookingList_data$ref;
export type BookingList_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: Booking_data$ref,
    |}
  |}>,
  +$refType: BookingList_data$ref,
|};
export type BookingList_data$data = BookingList_data;
export type BookingList_data$key = {
  +$data?: BookingList_data$data,
  +$fragmentRefs: BookingList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingList_data",
  "type": "BookingInterfaceConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingInterfaceEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": [
                {
                  "kind": "Literal",
                  "name": "opaque",
                  "value": false
                }
              ],
              "storageKey": "id(opaque:false)"
            },
            {
              "kind": "FragmentSpread",
              "name": "Booking_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ff95f11108cd58c11cb657ef9876bec4';
module.exports = node;
