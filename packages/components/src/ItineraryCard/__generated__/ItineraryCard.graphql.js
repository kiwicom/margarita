/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCard$ref: FragmentReference;
export type ItineraryCard = {|
  +sectors: ?$ReadOnlyArray<?{|
    +duration: ?number,
    +destination: ?{|
      +name: ?string
    |},
    +origin: ?{|
      +name: ?string
    |},
    +segments: ?$ReadOnlyArray<?{|
      +id: string,
      +arrivalTime: ?{|
        +local: ?any,
        +utc: ?any,
      |},
      +departureTime: ?{|
        +local: ?any,
        +utc: ?any,
      |},
      +destination: ?{|
        +name: ?string
      |},
      +duration: ?number,
      +origin: ?{|
        +name: ?string
      |},
      +transporter: ?{|
        +name: ?string
      |},
    |}>,
  |}>,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$refType: ItineraryCard$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "destination",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v1
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "origin",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v1
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "local",
    "args": null,
    "storageKey": null
  },
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
        v0,
        v2,
        v3,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "segments",
          "storageKey": null,
          "args": null,
          "concreteType": "Segment",
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
              "kind": "LinkedField",
              "alias": null,
              "name": "arrivalTime",
              "storageKey": null,
              "args": null,
              "concreteType": "DateType",
              "plural": false,
              "selections": v4
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "departureTime",
              "storageKey": null,
              "args": null,
              "concreteType": "DateType",
              "plural": false,
              "selections": v4
            },
            v2,
            v0,
            v3,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "transporter",
              "storageKey": null,
              "args": null,
              "concreteType": "Transporter",
              "plural": false,
              "selections": v1
            }
          ]
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
(node/*: any*/).hash = '78f9be914ee2248c942a0c154d6690a1';
module.exports = node;
