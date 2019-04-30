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
declare export opaque type ResultsList_data$fragmentType: ResultsList_data$ref;
export type ResultsList_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: ItineraryCard_data$ref,
    |}
  |}>,
  +$refType: ResultsList_data$ref,
|};
export type ResultsList_data$data = ResultsList_data;
export type ResultsList_data$key = {
  +$data?: ResultsList_data$data,
  +$fragmentRefs: ResultsList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultsList_data",
  "type": "ItineraryInterfaceConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ItineraryInterfaceEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": null,
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
(node/*: any*/).hash = '6bb70c83738a299e2504868bce08f220';
module.exports = node;
