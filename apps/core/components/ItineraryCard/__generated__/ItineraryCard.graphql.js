/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripSector$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCard$ref: FragmentReference;
export type ItineraryCard = {|
  +sectors: ?$ReadOnlyArray<?{|
    +departureTime: ?{|
      +utc: ?any
    |},
    +arrivalTime: ?{|
      +utc: ?any
    |},
    +$fragmentRefs: TripSector$ref,
  |}>,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$refType: ItineraryCard$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "utc",
    "args": null,
    "storageKey": null
  }
];
return {
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
          "kind": "LinkedField",
          "alias": null,
          "name": "departureTime",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrivalTime",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "FragmentSpread",
          "name": "TripSector",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4efa364cd2d04095d3c694ee2884c1a2';
module.exports = node;
