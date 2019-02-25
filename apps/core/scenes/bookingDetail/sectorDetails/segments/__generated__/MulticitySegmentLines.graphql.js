/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticitySegmentLines$ref: FragmentReference;
export type MulticitySegmentLines = {|
  +sectors?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: DrawSegmentLine$ref
  |}>,
  +$refType: MulticitySegmentLines$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MulticitySegmentLines",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sectors",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": true,
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
(node/*: any*/).hash = 'f343b4a913b1c0895e9dfc1976a2f29e';
module.exports = node;
