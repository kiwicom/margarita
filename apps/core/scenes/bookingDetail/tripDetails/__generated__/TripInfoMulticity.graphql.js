/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoMulticity$ref: FragmentReference;
export type TripInfoMulticity = {|
  +sectors?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TripInfo$ref
  |}>,
  +$refType: TripInfoMulticity$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfoMulticity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sectors",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "TripInfo",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '731221fc024a2976c8126da221e7eb34';
module.exports = node;
