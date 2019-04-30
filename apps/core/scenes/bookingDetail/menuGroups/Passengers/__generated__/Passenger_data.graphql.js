/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type PassengerTitle = "Mr" | "Ms" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Passenger_data$ref: FragmentReference;
declare export opaque type Passenger_data$fragmentType: Passenger_data$ref;
export type Passenger_data = {|
  +title: ?PassengerTitle,
  +firstname: ?string,
  +lastname: ?string,
  +birthday: ?string,
  +$refType: Passenger_data$ref,
|};
export type Passenger_data$data = Passenger_data;
export type Passenger_data$key = {
  +$data?: Passenger_data$data,
  +$fragmentRefs: Passenger_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Passenger_data",
  "type": "Passenger",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "firstname",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastname",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "birthday",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '24f8535214b5ba935acd61ea73bf9332';
module.exports = node;
