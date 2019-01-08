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
  +localDeparture: ?string,
  +localArrival: ?string,
  +route: ?$ReadOnlyArray<?{|
    +airline: ?string,
    +cityFrom: ?string,
    +cityTo: ?string,
    +flyFrom: ?string,
    +id: ?string,
    +localArrival: ?any,
    +utcArrival: ?any,
    +localDeparture: ?any,
    +utcDeparture: ?any,
  |}>,
  +routes: ?$ReadOnlyArray<?$ReadOnlyArray<?string>>,
  +$refType: ResultsListItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localDeparture",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localArrival",
  "args": null,
  "storageKey": null
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
    v0,
    v1,
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
          "kind": "ScalarField",
          "alias": null,
          "name": "cityFrom",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cityTo",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "flyFrom",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "utcArrival",
          "args": null,
          "storageKey": null
        },
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "utcDeparture",
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
(node/*: any*/).hash = '1465e614745bdad1bfd18c6f448213dc';
module.exports = node;
