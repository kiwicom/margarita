/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingBadges_data$ref: FragmentReference;
export type BookingBadges_data = {|
  +id: string,
  +status: ?string,
  +$refType: BookingBadges_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingBadges_data",
  "type": "BookingInterface",
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
(node/*: any*/).hash = '7372ee838cf6e65d1d589a4aaaa50bd6';
module.exports = node;
