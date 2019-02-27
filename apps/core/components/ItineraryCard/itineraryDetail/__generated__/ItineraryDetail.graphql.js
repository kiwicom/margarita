/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorsList$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryDetail$ref: FragmentReference;
export type ItineraryDetail = {|
  +bookingToken: ?string,
  +$fragmentRefs: SectorsList$ref,
  +$refType: ItineraryDetail$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryDetail",
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
      "name": "SectorsList",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '620667d7de647e75640afbc29c24ce0e';
module.exports = node;
