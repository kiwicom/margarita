/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityName_data$ref: FragmentReference;
declare export opaque type CityName_data$fragmentType: CityName_data$ref;
export type CityName_data = {|
  +stop: ?{|
    +countryFlagURL: ?string,
    +city: ?{|
      +name: ?string
    |},
  |},
  +$refType: CityName_data$ref,
|};
export type CityName_data$data = CityName_data;
export type CityName_data$key = {
  +$data?: CityName_data$data,
  +$fragmentRefs: CityName_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CityName_data",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "countryFlagURL",
          "args": null,
          "storageKey": null
        },
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
(node/*: any*/).hash = '02457527d82c9661a67fc45dfad792cf';
module.exports = node;
