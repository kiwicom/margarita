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
  +price: ?number,
  +flyFrom: ?string,
  +flyTo: ?string,
  +localDeparture: ?string,
  +localArrival: ?string,
  +$refType: ResultsListItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ResultsListItem",
  "type": "Itinerary",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
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
      "name": "flyTo",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "localDeparture",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "localArrival",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b99d8715a2c25d2c9b3cb2655ddada9e';
module.exports = node;
