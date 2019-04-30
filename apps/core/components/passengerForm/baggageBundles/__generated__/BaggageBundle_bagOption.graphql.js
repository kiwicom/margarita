/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BaggageBundle_bagOption$ref: FragmentReference;
declare export opaque type BaggageBundle_bagOption$fragmentType: BaggageBundle_bagOption$ref;
export type BaggageBundle_bagOption = {|
  +quantity: ?number,
  +dimensions: ?string,
  +weight: ?string,
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +$refType: BaggageBundle_bagOption$ref,
|};
export type BaggageBundle_bagOption$data = BaggageBundle_bagOption;
export type BaggageBundle_bagOption$key = {
  +$data?: BaggageBundle_bagOption$data,
  +$fragmentRefs: BaggageBundle_bagOption$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BaggageBundle_bagOption",
  "type": "HoldBagOption",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "quantity",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dimensions",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "weight",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "price",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currency",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a3f7f04b2ee16ca321d7f952d67f472';
module.exports = node;
