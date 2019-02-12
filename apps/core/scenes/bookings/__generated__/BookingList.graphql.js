/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
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


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingList",
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
(node/*: any*/).hash = 'a0ea9cae867b09fae6c006c9330a3c0c';
module.exports = node;
