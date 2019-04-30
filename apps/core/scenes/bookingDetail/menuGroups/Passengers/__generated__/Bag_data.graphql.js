/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type BagType = "CABIN_BAG" | "CHECKED_BAGGAGE" | "PERSONAL_ITEM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Bag_data$ref: FragmentReference;
declare export opaque type Bag_data$fragmentType: Bag_data$ref;
export type Bag_data = {|
  +type: ?BagType,
  +quantity: ?number,
  +$refType: Bag_data$ref,
|};
export type Bag_data$data = Bag_data;
export type Bag_data$key = {
  +$data?: Bag_data$data,
  +$fragmentRefs: Bag_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Bag_data",
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
(node/*: any*/).hash = 'e80c5a2da7c1168cad375c1cadec9ab7';
module.exports = node;
