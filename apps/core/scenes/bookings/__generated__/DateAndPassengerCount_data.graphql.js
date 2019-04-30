/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DateAndPassengerCount_data$ref: FragmentReference;
declare export opaque type DateAndPassengerCount_data$fragmentType: DateAndPassengerCount_data$ref;
export type DateAndPassengerCount_data = {|
  +passengerCount: ?number,
  +departure: ?{|
    +time: ?{|
      +local: ?any
    |}
  |},
  +$refType: DateAndPassengerCount_data$ref,
|};
export type DateAndPassengerCount_data$data = DateAndPassengerCount_data;
export type DateAndPassengerCount_data$key = {
  +$data?: DateAndPassengerCount_data$data,
  +$fragmentRefs: DateAndPassengerCount_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DateAndPassengerCount_data",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "passengerCount",
      "args": null,
      "storageKey": null
    },
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
          "kind": "LinkedField",
          "alias": null,
          "name": "time",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "local",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ee5c5051e7e613f8712381028bf68f92';
module.exports = node;
