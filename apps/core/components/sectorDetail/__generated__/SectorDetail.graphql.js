/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorHeader$ref = any;
type SectorStopoverDuration$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetail$ref: FragmentReference;
export type SectorDetail = {|
  +$fragmentRefs: SectorStopoverDuration$ref & SectorHeader$ref,
  +$refType: SectorDetail$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorDetail",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SectorStopoverDuration",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorHeader",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '40f984d22e2e0a9c6b2d196160bb9c44';
module.exports = node;
