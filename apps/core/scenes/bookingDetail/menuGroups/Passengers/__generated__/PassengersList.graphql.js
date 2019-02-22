/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Bag$ref = any;
type Passenger$ref = any;
export type BagType = "CABIN_BAG" | "CHECKED_BAGGAGE" | "PERSONAL_ITEM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengersList$ref: FragmentReference;
export type PassengersList = {|
  +passengers: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Passenger$ref,
  |}>,
  +bagInfo: ?$ReadOnlyArray<?{|
    +type: ?BagType,
    +$fragmentRefs: Bag$ref,
  |}>,
  +$refType: PassengersList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PassengersList",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Passenger",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "bagInfo",
      "storageKey": null,
      "args": null,
      "concreteType": "Bag",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Bag",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '61e5c7ef0dfafd230544efb7faa012a9';
module.exports = node;
