/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationName_data$ref: FragmentReference;
declare export opaque type LocationName_data$fragmentType: LocationName_data$ref;
export type LocationName_data = {|
  +stop: ?{|
    +city: ?{|
      +name: ?string
    |}
  |},
  +$refType: LocationName_data$ref,
|};
export type LocationName_data$data = LocationName_data;
export type LocationName_data$key = {
  +$data?: LocationName_data$data,
  +$fragmentRefs: LocationName_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LocationName_data",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '233d35a3756b8d775e639d160c792e77';
module.exports = node;
