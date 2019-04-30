/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawSegmentLine_data$ref: FragmentReference;
declare export opaque type DrawSegmentLine_data$fragmentType: DrawSegmentLine_data$ref;
export type DrawSegmentLine_data = {|
  +segments: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +stop: ?{|
        +coordinates: ?{|
          +latitude: ?number,
          +longitude: ?number,
        |}
      |}
    |},
    +arrival: ?{|
      +stop: ?{|
        +coordinates: ?{|
          +latitude: ?number,
          +longitude: ?number,
        |}
      |}
    |},
  |}>,
  +$refType: DrawSegmentLine_data$ref,
|};
export type DrawSegmentLine_data$data = DrawSegmentLine_data;
export type DrawSegmentLine_data$key = {
  +$data?: DrawSegmentLine_data$data,
  +$fragmentRefs: DrawSegmentLine_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
        "kind": "LinkedField",
        "alias": null,
        "name": "coordinates",
        "storageKey": null,
        "args": null,
        "concreteType": "Coordinate",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": "latitude",
            "name": "lat",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "longitude",
            "name": "lng",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "DrawSegmentLine_data",
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '37b9ce81be9077e405020d2a3797645c';
module.exports = node;
