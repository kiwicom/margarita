/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap_segmentMapSegment$ref: FragmentReference;
declare export opaque type SegmentMap_segmentMapSegment$fragmentType: SegmentMap_segmentMapSegment$ref;
export type SegmentMap_segmentMapSegment = {
  +segments: ?$ReadOnlyArray<?{
    +arrival: ?{
      +stop: ?{
        +locationId: ?string,
        +city: ?{
          +name: ?string
        },
        +coordinates: ?{
          +latitude: ?number,
          +longitude: ?number,
        },
      }
    },
    +departure: ?{
      +stop: ?{
        +locationId: ?string,
        +city: ?{
          +name: ?string
        },
        +coordinates: ?{
          +latitude: ?number,
          +longitude: ?number,
        },
      }
    },
  }>
};
export type SegmentMap_segmentMapSegment$data = SegmentMap_segmentMapSegment;
export type SegmentMap_segmentMapSegment$key = {
  +$data?: SegmentMap_segmentMapSegment$data,
  +$fragmentRefs: SegmentMap_segmentMapSegment$ref,
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
  "name": "SegmentMap_segmentMapSegment",
  "type": "Sector",
  "metadata": {
    "mask": false
  },
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
(node/*: any*/).hash = '22bbe109ea57138bb76fab5b3f47704b';
module.exports = node;
