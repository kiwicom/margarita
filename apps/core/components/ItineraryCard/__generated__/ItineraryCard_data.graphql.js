/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryDetail_data$ref = any;
type RenderTripSectorItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCard_data$ref: FragmentReference;
export type ItineraryCard_data = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |}>,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$fragmentRefs: ItineraryDetail_data$ref,
  +$refType: ItineraryCard_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryCard_data",
  "type": "Itinerary",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sectors",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "RenderTripSectorItem_data",
          "args": null
        }
      ]
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
          "name": "currency",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryDetail_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1801b771ac22794bea9c368a12ac6a9e';
module.exports = node;
