/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FromTo_data$ref = any;
type SectorDates_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfo_data$ref: FragmentReference;
declare export opaque type SectorInfo_data$fragmentType: SectorInfo_data$ref;
export type SectorInfo_data = {|
  +$fragmentRefs: FromTo_data$ref & SectorDates_data$ref,
  +$refType: SectorInfo_data$ref,
|};
export type SectorInfo_data$data = SectorInfo_data;
export type SectorInfo_data$key = {
  +$data?: SectorInfo_data$data,
  +$fragmentRefs: SectorInfo_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfo_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorDates_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '80543cff80f744a05d5d24ef49a47472';
module.exports = node;
