/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorHeader_data$ref = any;
type SectorStopoverDuration_data$ref = any;
type Segment_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetail_data$ref: FragmentReference;
declare export opaque type SectorDetail_data$fragmentType: SectorDetail_data$ref;
export type SectorDetail_data = {|
  +segments: ?$ReadOnlyArray<?{|
    +id: string,
    +departure: ?{|
      +time: ?{|
        +local: ?any
      |}
    |},
    +arrival: ?{|
      +time: ?{|
        +local: ?any
      |}
    |},
    +$fragmentRefs: Segment_data$ref,
  |}>,
  +$fragmentRefs: SectorStopoverDuration_data$ref & SectorHeader_data$ref,
  +$refType: SectorDetail_data$ref,
|};
export type SectorDetail_data$data = SectorDetail_data;
export type SectorDetail_data$key = {
  +$data?: SectorDetail_data$data,
  +$fragmentRefs: SectorDetail_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Fragment",
  "name": "SectorDetail_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "segments",
      "storageKey": null,
      "args": null,
      "concreteType": "Segment",
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
          "kind": "FragmentSpread",
          "name": "Segment_data",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorStopoverDuration_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorHeader_data",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '12d2d6eca5efb7bb86f12745f2ffa878';
module.exports = node;
