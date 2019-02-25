/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OneWaySegmentLines$ref: FragmentReference;
export type OneWaySegmentLines = {|
  +sector?: ?{|
    +$fragmentRefs: DrawSegmentLine$ref
  |},
  +$refType: OneWaySegmentLines$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OneWaySegmentLines",
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
              "name": "DrawSegmentLine",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0223bf29a24949067ab0a616240e58df';
module.exports = node;
