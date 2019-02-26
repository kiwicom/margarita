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
      "kind": "FragmentSpread",
      "name": "SectorsList",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c19ada0d66e56ba4687de344f235102b';
module.exports = node;
