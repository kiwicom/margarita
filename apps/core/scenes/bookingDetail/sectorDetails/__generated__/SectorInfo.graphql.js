/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FromTo$ref = any;
type SectorDates$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfo$ref: FragmentReference;
export type SectorInfo = {|
  +$fragmentRefs: FromTo$ref & SectorDates$ref,
  +$refType: SectorInfo$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfo",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorDates",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6f8aa25ef39b14234be17384f6f2541a';
module.exports = node;
