/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Passenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengersList$ref: FragmentReference;
export type PassengersList = {|
  +passengers: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Passenger$ref,
  |}>,
  +$refType: PassengersList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PassengersList",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Passenger",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2ad589d372a8d6189d2db9f1ecbd458a';
module.exports = node;
