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
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +sector?: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +inbound?: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +outbound?: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +$fragmentRefs: ItineraryDetail_data$ref,
  +$refType: ItineraryCard_data$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "RenderTripSectorItem_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "ItineraryCard_data",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    },
    {
      "kind": "InlineFragment",
      "type": "ItineraryOneWay",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sector",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v0/*: any*/)
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "ItineraryReturn",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "inbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v0/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v0/*: any*/)
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd54b91ad0798e2593fb1f181413a7bae';
module.exports = node;
