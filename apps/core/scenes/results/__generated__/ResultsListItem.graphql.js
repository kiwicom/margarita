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
  +sectors: ?$ReadOnlyArray<?{|
    +duration: ?number,
    +departureTime: ?{|
      +local: ?any,
      +utc: ?any,
    |},
    +arrivalTime: ?{|
      +local: ?any,
      +utc: ?any,
    |},
    +destination: ?{|
      +name: ?string,
      +locationId: ?string,
    |},
    +origin: ?{|
      +name: ?string,
      +locationId: ?string,
    |},
    +segments: ?$ReadOnlyArray<?{|
      +departureTime: ?{|
        +local: ?any,
        +utc: ?any,
      |},
      +duration: ?number,
      +arrivalTime: ?{|
        +local: ?any,
        +utc: ?any,
      |},
      +transporter: ?{|
        +name: ?string
      |},
      +destination: ?{|
        +name: ?string,
        +locationId: ?string,
      |},
      +origin: ?{|
        +name: ?string,
        +locationId: ?string,
      |},
    |}>,
  |}>,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$refType: ResultsListItem$ref,
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
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departureTime",
  "storageKey": null,
  "args": null,
  "concreteType": "DateType",
  "plural": false,
  "selections": v1
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrivalTime",
  "storageKey": null,
  "args": null,
  "concreteType": "DateType",
  "plural": false,
  "selections": v1
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "locationId",
    "args": null,
    "storageKey": null
  }
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "destination",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v5
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "origin",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v5
};
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
      "name": "sectors",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": true,
      "selections": [
        v0,
        v2,
        v3,
        v6,
        v7,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "segments",
          "storageKey": null,
          "args": null,
          "concreteType": "Segment",
          "plural": true,
          "selections": [
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
              "selections": [
                v4
              ]
            },
            v6,
            v7
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
(node/*: any*/).hash = 'c83cc6c9a4071a50bc1480bbe29c8668';
module.exports = node;
