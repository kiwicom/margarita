/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentStopInfo_data$ref: FragmentReference;
declare export opaque type SegmentStopInfo_data$fragmentType: SegmentStopInfo_data$ref;
export type SegmentStopInfo_data = {|
  +time: ?{|
    +local: ?any
  |},
  +stop: ?{|
    +name: ?string,
    +locationId: ?string,
  |},
  +$refType: SegmentStopInfo_data$ref,
|};
export type SegmentStopInfo_data$data = SegmentStopInfo_data;
export type SegmentStopInfo_data$key = {
  +$data?: SegmentStopInfo_data$data,
  +$fragmentRefs: SegmentStopInfo_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentStopInfo_data",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "stop",
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "locationId",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a14200b62e1290542df9f069cd232727';
module.exports = node;
