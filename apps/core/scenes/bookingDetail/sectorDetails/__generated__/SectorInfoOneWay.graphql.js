/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoOneWay$ref: FragmentReference;
export type SectorInfoOneWay = {|
  +sector?: ?{|
    +$fragmentRefs: SectorInfo$ref
  |},
  +$refType: SectorInfoOneWay$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoOneWay",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sector",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SectorInfo",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bd0cf6a7fd809286ceb3504ecfd17c3c';
module.exports = node;
