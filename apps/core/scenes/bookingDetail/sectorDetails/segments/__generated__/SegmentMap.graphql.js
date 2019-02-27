/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MapLines$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap$ref: FragmentReference;
export type SegmentMap = {|
  +type: ?BookingType,
  +sector?: ?{|
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
    |}>
  |},
  +inbound?: ?{|
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
    |}>
  |},
  +outbound?: ?{|
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
    |}>
  |},
  +sectors?: ?$ReadOnlyArray<?{|
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
    |}>
  |}>,
  +$fragmentRefs: MapLines$ref,
  +$refType: SegmentMap$ref,
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
],
v1 = [
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
];
return {
  "kind": "Fragment",
  "name": "SegmentMap",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "MapLines",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
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
          "selections": (v1/*: any*/)
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "inbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v1/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v1/*: any*/)
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sector",
          "storageKey": null,
          "args": null,
          "concreteType": "Sector",
          "plural": false,
          "selections": (v1/*: any*/)
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '58d71786226fbd120e3d07dc228b7150';
module.exports = node;
