/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Header$ref = any;
type SectorInfoMulticity$ref = any;
type SectorInfoOneWay$ref = any;
type SectorInfoReturn$ref = any;
type SegmentContainer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetails$ref: FragmentReference;
export type SectorDetails = {|
  +__typename: string,
  +$fragmentRefs: SectorInfoOneWay$ref & SectorInfoReturn$ref & SectorInfoMulticity$ref & Header$ref & SegmentContainer$ref,
  +$refType: SectorDetails$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorDetails",
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
      "name": "SectorInfoOneWay",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoReturn",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoMulticity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SegmentContainer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4c3df07e24c8246356842b6a7c097db2';
module.exports = node;
