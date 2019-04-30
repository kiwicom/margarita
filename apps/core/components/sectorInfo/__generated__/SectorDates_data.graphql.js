/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDate_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDates_data$ref: FragmentReference;
declare export opaque type SectorDates_data$fragmentType: SectorDates_data$ref;
export type SectorDates_data = {|
  +departure: ?{|
    +$fragmentRefs: SectorDate_data$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: SectorDate_data$ref
  |},
  +duration: ?number,
  +$refType: SectorDates_data$ref,
|};
export type SectorDates_data$data = SectorDates_data;
export type SectorDates_data$key = {
  +$data?: SectorDates_data$data,
  +$fragmentRefs: SectorDates_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDate_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorDates_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1af0b9cfbef00e068ddd7919abbc04e';
module.exports = node;
