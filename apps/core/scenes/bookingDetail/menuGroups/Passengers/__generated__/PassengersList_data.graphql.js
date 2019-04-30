/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Bag_data$ref = any;
type Passenger_data$ref = any;
export type BagType = "CABIN_BAG" | "CHECKED_BAGGAGE" | "PERSONAL_ITEM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengersList_data$ref: FragmentReference;
declare export opaque type PassengersList_data$fragmentType: PassengersList_data$ref;
export type PassengersList_data = {|
  +passengers: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Passenger_data$ref,
  |}>,
  +bagInfo: ?$ReadOnlyArray<?{|
    +type: ?BagType,
    +$fragmentRefs: Bag_data$ref,
  |}>,
  +$refType: PassengersList_data$ref,
|};
export type PassengersList_data$data = PassengersList_data;
export type PassengersList_data$key = {
  +$data?: PassengersList_data$data,
  +$fragmentRefs: PassengersList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PassengersList_data",
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
          "name": "Passenger_data",
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
          "name": "Bag_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '823083f5cb2fb74f6b538fdbe7a9e5de';
module.exports = node;
