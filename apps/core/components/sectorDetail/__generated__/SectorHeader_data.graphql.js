/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorHeader_data$ref: FragmentReference;
declare export opaque type SectorHeader_data$fragmentType: SectorHeader_data$ref;
export type SectorHeader_data = {|
  +duration: ?number,
  +arrival: ?{|
    +stop: ?{|
      +city: ?{|
        +name: ?string
      |}
    |}
  |},
  +$refType: SectorHeader_data$ref,
|};
export type SectorHeader_data$data = SectorHeader_data;
export type SectorHeader_data$key = {
  +$data?: SectorHeader_data$data,
  +$fragmentRefs: SectorHeader_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorHeader_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
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
(node/*: any*/).hash = '47457dc08dc5dae69c1ab0a8e94a53cd';
module.exports = node;
