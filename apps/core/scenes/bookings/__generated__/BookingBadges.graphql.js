/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingBadges$ref: FragmentReference;
export type BookingBadges = {|
  +id: string,
  +status: ?string,
  +$refType: BookingBadges$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingBadges",
  "type": "CustomerBooking",
  "metadata": null,
  "argumentDefinitions": [],
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
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'de7a672b0077e5bde8eff4e90327b57b';
module.exports = node;
