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
  +currency: ?string,
  +price: ?number,
  +localDeparture: ?string,
  +localArrival: ?string,
  +routes: ?$ReadOnlyArray<?{|
    +airline: ?string,
    +cityFrom: ?string,
    +cityTo: ?string,
    +id: ?string,
    +localArrival: ?any,
    +utcArrival: ?any,
    +localDeparture: ?any,
    +utcDeparture: ?any,
  |}>,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    },
    v0,
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "routes",
      "storageKey": null,
      "args": null,
      "concreteType": "Routes",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '532612cd51195595adbd975556672f2b';
module.exports = node;
