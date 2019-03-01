/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryCard_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultsList_data$ref: FragmentReference;
export type ResultsList_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: ItineraryCard_data$ref,
    |}
  |}>,
  +$refType: ResultsList_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultsList_data",
  "type": "ItineraryConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ItineraryEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Itinerary",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "ItineraryCard_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'afa99fed96d27e3809635e42673c3aec';
module.exports = node;
