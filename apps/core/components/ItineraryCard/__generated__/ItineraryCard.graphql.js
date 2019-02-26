/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryDetail$ref = any;
type RenderTripSectorItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCard$ref: FragmentReference;
export type ItineraryCard = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: RenderTripSectorItem$ref
  |}>,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$fragmentRefs: ItineraryDetail$ref,
  +$refType: ItineraryCard$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryCard",
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
          "name": "RenderTripSectorItem",
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
      "name": "ItineraryDetail",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cfe99b35b01f7b08c86b76110ee92bb2';
module.exports = node;
