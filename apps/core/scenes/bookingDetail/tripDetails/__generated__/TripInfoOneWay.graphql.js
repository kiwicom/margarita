/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoOneWay$ref: FragmentReference;
export type TripInfoOneWay = {|
  +sector?: ?{|
    +$fragmentRefs: TripInfo$ref
  |},
  +$refType: TripInfoOneWay$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfoOneWay",
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
              "name": "TripInfo",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8be64c41a16d01934ea8a434cdab20bd';
module.exports = node;
