/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MulticitySegmentLines$ref = any;
type OneWaySegmentLines$ref = any;
type ReturnSegmentLines$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapLines$ref: FragmentReference;
export type MapLines = {|
  +__typename: string,
  +$fragmentRefs: OneWaySegmentLines$ref & ReturnSegmentLines$ref & MulticitySegmentLines$ref,
  +$refType: MapLines$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapLines",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OneWaySegmentLines",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ReturnSegmentLines",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MulticitySegmentLines",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0cdb7793c30d7078f99786aea2b64ae8';
module.exports = node;
