/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorStopoverDuration_data$ref: FragmentReference;
declare export opaque type SectorStopoverDuration_data$fragmentType: SectorStopoverDuration_data$ref;
export type SectorStopoverDuration_data = {|
  +stopoverDuration: ?number,
  +departure: ?{|
    +stop: ?{|
      +city: ?{|
        +name: ?string
      |}
    |}
  |},
  +$refType: SectorStopoverDuration_data$ref,
|};
export type SectorStopoverDuration_data$data = SectorStopoverDuration_data;
export type SectorStopoverDuration_data$key = {
  +$data?: SectorStopoverDuration_data$data,
  +$fragmentRefs: SectorStopoverDuration_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorStopoverDuration_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stopoverDuration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "stop",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "city",
              "storageKey": null,
              "args": null,
              "concreteType": "LocationArea",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fda71ade6aa4cede7e8c548c18313cff';
module.exports = node;
