/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type BagType = "CABIN_BAG" | "CHECKED_BAGGAGE" | "PERSONAL_ITEM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Bag$ref: FragmentReference;
export type Bag = {|
  +type: ?BagType,
  +quantity: ?number,
  +$refType: Bag$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Bag",
  "type": "Bag",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "quantity",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5b0e3be28d6e25f564b11c2eef036754';
module.exports = node;
