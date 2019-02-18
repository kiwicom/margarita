/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripSector$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderTripSectorItem$ref: FragmentReference;
export type RenderTripSectorItem = {|
  +departure: ?{|
    +cityName: ?string
  |},
  +stopoverDuration: ?number,
  +$fragmentRefs: TripSector$ref,
  +$refType: RenderTripSectorItem$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RenderTripSectorItem",
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
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cityName",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stopoverDuration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripSector",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd2eed3f170f8607793aadb9cb562f5f4';
module.exports = node;
