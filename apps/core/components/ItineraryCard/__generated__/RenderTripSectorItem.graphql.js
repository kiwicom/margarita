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
  +origin: ?{|
    +name: ?string
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
      "name": "origin",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
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
(node/*: any*/).hash = 'fe9a0db94e6b5919db76f432dc7cb185';
module.exports = node;
