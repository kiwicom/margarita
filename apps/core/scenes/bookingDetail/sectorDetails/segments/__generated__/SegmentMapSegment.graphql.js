/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMapSegment$ref: FragmentReference;
export type SegmentMapSegment = {|
  +segments: ?$ReadOnlyArray<?{|
    +arrival: ?{|
      +stop: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
        +coordinates: ?{|
          +latitude: ?number,
          +longitude: ?number,
        |},
      |}
    |},
    +departure: ?{|
      +stop: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
        +coordinates: ?{|
          +latitude: ?number,
          +longitude: ?number,
        |},
      |}
    |},
  |}>,
  +$refType: SegmentMapSegment$ref,
|};
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
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
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
  "name": "SegmentMapSegment",
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
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": (v0/*: any*/)
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a9a49e285001633f9dc2791ca40eddd';
module.exports = node;
