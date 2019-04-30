/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripSector_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderTripSectorItem_data$ref: FragmentReference;
declare export opaque type RenderTripSectorItem_data$fragmentType: RenderTripSectorItem_data$ref;
export type RenderTripSectorItem_data = {|
  +departure: ?{|
    +stop: ?{|
      +city: ?{|
        +name: ?string
      |}
    |}
  |},
  +stopoverDuration: ?number,
  +$fragmentRefs: TripSector_data$ref,
  +$refType: RenderTripSectorItem_data$ref,
|};
export type RenderTripSectorItem_data$data = RenderTripSectorItem_data;
export type RenderTripSectorItem_data$key = {
  +$data?: RenderTripSectorItem_data$data,
  +$fragmentRefs: RenderTripSectorItem_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RenderTripSectorItem_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stopoverDuration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripSector_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1e788c9a20c904f1116b204d38462c17';
module.exports = node;
