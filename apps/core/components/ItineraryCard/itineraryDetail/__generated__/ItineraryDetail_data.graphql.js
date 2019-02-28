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
  "type": "Itinerary",
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
(node/*: any*/).hash = '4a43235653c12bef07caaac50833af41';
module.exports = node;
