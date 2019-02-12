/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoMulticity$ref: FragmentReference;
export type TripInfoMulticity = {|
  +trips?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TripInfo$ref
  |}>,
  +$refType: TripInfoMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
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
          "name": "trips",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
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
(node/*: any*/).hash = 'b32c2d8683d3f6c19198a853c11e4289';
module.exports = node;
