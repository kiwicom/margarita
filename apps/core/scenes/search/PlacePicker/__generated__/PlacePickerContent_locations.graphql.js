/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PlacePickerList_locations$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacePickerContent_locations$ref: FragmentReference;
export type PlacePickerContent_locations = {|
  +locationsByTerm: ?{|
    +$fragmentRefs: PlacePickerList_locations$ref
  |},
  +$refType: PlacePickerContent_locations$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PlacePickerContent_locations",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "input",
      "type": "LocationsByTermInput!",
      "defaultValue": {
        "term": ""
      }
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "locationsByTerm",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input",
          "type": "LocationsByTermInput!"
        }
      ],
      "concreteType": "LocationConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "PlacePickerList_locations",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '84d47451c81ef9241761f1fbad2b7ea9';
module.exports = node;
