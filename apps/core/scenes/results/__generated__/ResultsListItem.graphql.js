/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultsListItem$ref: FragmentReference;
export type ResultsListItem = {|
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +route: ?$ReadOnlyArray<?{|
    +airline: ?string,
    +arrival: ?{|
      +city: ?string,
      +cityCode: ?string,
      +localTime: ?any,
      +utcTime: ?any,
    |},
    +departure: ?{|
      +city: ?string,
      +cityCode: ?string,
      +localTime: ?any,
      +utcTime: ?any,
    |},
    +id: ?string,
  |}>,
  +routes: ?$ReadOnlyArray<?$ReadOnlyArray<?string>>,
  +$refType: ResultsListItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "city",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityCode",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "utcTime",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ResultsListItem",
  "type": "Itinerary",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "route",
      "storageKey": null,
      "args": null,
      "concreteType": "Route",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "airline",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "TripSegment",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "TripSegment",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "routes",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '525d93ca3b11711bf40ce6d3d12699c3';
module.exports = node;
