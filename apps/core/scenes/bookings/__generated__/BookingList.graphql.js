/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Booking$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingList$ref: FragmentReference;
export type BookingList = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: Booking$ref,
    |}
  |}>,
  +$refType: BookingList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingList",
  "type": "CustomerBookingConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CustomerBookingEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "CustomerBooking",
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
                  "value": false,
                  "type": "Boolean"
                }
              ],
              "storageKey": "id(opaque:false)"
            },
            {
              "kind": "FragmentSpread",
              "name": "Booking",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '355c0ac0e5d4301e3a15aac9c060d9c8';
module.exports = node;
