/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorsList_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryDetail_data$ref: FragmentReference;
export type ItineraryDetail_data = {|
  +bookingToken: ?string,
  +$fragmentRefs: SectorsList_data$ref,
  +$refType: ItineraryDetail_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryDetail_data",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bookingToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorsList_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '90b7f0bc5d6d02c54cf4b48fa1fc9fbc';
module.exports = node;
