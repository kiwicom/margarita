/**
 * @flow
 * @relayHash 50080376ff3f80bb7c1725cfd2eed39d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingDetailWrapper$ref = any;
export type BookingDetailQueryVariables = {|
  id: string
|};
export type BookingDetailQueryResponse = {|
  +bookingDetail: ?{|
    +$fragmentRefs: BookingDetailWrapper$ref
  |}
|};
export type BookingDetailQuery = {|
  variables: BookingDetailQueryVariables,
  response: BookingDetailQueryResponse,
|};
*/


/*
query BookingDetailQuery(
  $id: ID!
) {
  bookingDetail(id: $id) {
    __typename
    ...BookingDetailWrapper
    id
  }
}

fragment BookingDetailWrapper on BookingInterface {
  ...SectorDetails
  ...Passengers
}

fragment SectorDetails on BookingInterface {
  ...Header
  ...SectorInfoOneWay
  ...SectorInfoMulticity
  ...SectorInfoReturn
  ...SegmentContainer
  type
}

fragment Passengers on BookingInterface {
  ...PassengersList
  ...VisaDetail
}

fragment PassengersList on BookingInterface {
  passengers {
    id
    ...Passenger
  }
  bagInfo {
    type
    ...Bag
  }
}

fragment VisaDetail on BookingInterface {
  passengers {
    visaRequired
    id
  }
}

fragment Passenger on Passenger {
  title
  firstname
  lastname
  birthday
}

fragment Bag on Bag {
  type
  quantity
}

fragment Header on BookingInterface {
  bookingId: id(opaque: false)
  status
}

fragment SectorInfoOneWay on BookingInterface {
  ... on BookingOneWay {
    sector {
      ...SectorInfo
    }
  }
}

fragment SectorInfoMulticity on BookingInterface {
  ... on BookingMulticity {
    sectors {
      ...SectorInfo
    }
  }
}

fragment SectorInfoReturn on BookingInterface {
  ... on BookingReturn {
    ...FromTo
    inbound {
      ...SectorDates
    }
    outbound {
      ...SectorDates
    }
  }
}

fragment SegmentContainer on BookingInterface {
  ...SegmentMap
}

fragment SegmentMap on BookingInterface {
  ...MapLines
  segmentLocations {
    lat
    lng
  }
}

fragment MapLines on BookingInterface {
  type
  ...OneWaySegmentLines
  ...ReturnSegmentLines
  ...MulticitySegmentLines
}

fragment OneWaySegmentLines on BookingInterface {
  ... on BookingOneWay {
    sector {
      ...DrawSegmentLine
    }
  }
}

fragment ReturnSegmentLines on BookingInterface {
  ... on BookingReturn {
    inbound {
      ...DrawSegmentLine
    }
    outbound {
      ...DrawSegmentLine
    }
  }
}

fragment MulticitySegmentLines on BookingInterface {
  ... on BookingMulticity {
    sectors {
      ...DrawSegmentLine
    }
  }
}

fragment DrawSegmentLine on Sector {
  segments {
    departure {
      stop {
        coordinates {
          latitude: lat
          longitude: lng
        }
        id
      }
    }
    arrival {
      stop {
        coordinates {
          latitude: lat
          longitude: lng
        }
        id
      }
    }
    id
  }
}

fragment FromTo on FromToInterface {
  departure {
    ...CityName
  }
  arrival {
    ...CityName
  }
  ...FromToIcon
}

fragment SectorDates on Sector {
  departure {
    ...SectorDate
  }
  arrival {
    ...SectorDate
  }
  duration
}

fragment SectorDate on RouteStop {
  time {
    local
  }
}

fragment CityName on RouteStop {
  stop {
    countryFlagURL
    city {
      name
      id
    }
    id
  }
}

fragment FromToIcon on FromToInterface {
  type
}

fragment SectorInfo on Sector {
  ...FromTo
  ...SectorDates
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
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
      "name": "countryFlagURL",
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
        },
        (v3/*: any*/)
      ]
    },
    (v3/*: any*/)
  ]
},
v5 = {
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
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v8 = [
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
      },
      (v3/*: any*/)
    ]
  }
],
v9 = {
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
      "selections": (v8/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v8/*: any*/)
    },
    (v3/*: any*/)
  ]
},
v10 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v6/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v6/*: any*/)
  },
  (v2/*: any*/),
  (v7/*: any*/),
  (v9/*: any*/)
],
v11 = [
  (v4/*: any*/)
],
v12 = [
  (v5/*: any*/)
],
v13 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v12/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v12/*: any*/)
  },
  (v7/*: any*/),
  (v9/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookingDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BookingDetailWrapper",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "bookingId",
            "name": "id",
            "args": [
              {
                "kind": "Literal",
                "name": "opaque",
                "value": false,
                "type": "Boolean"
              }
            ],
            "storageKey": "id(opaque:false)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "segmentLocations",
            "storageKey": null,
            "args": null,
            "concreteType": "Coordinate",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lat",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lng",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "passengers",
            "storageKey": null,
            "args": null,
            "concreteType": "Passenger",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "visaRequired",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "bagInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "Bag",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "quantity",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v3/*: any*/),
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
                "selections": (v10/*: any*/)
              }
            ]
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
                "selections": (v10/*: any*/)
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
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v11/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v11/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v13/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v13/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookingDetailQuery",
    "id": null,
    "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    __typename\n    ...BookingDetailWrapper\n    id\n  }\n}\n\nfragment BookingDetailWrapper on BookingInterface {\n  ...SectorDetails\n  ...Passengers\n}\n\nfragment SectorDetails on BookingInterface {\n  ...Header\n  ...SectorInfoOneWay\n  ...SectorInfoMulticity\n  ...SectorInfoReturn\n  ...SegmentContainer\n  type\n}\n\nfragment Passengers on BookingInterface {\n  ...PassengersList\n  ...VisaDetail\n}\n\nfragment PassengersList on BookingInterface {\n  passengers {\n    id\n    ...Passenger\n  }\n  bagInfo {\n    type\n    ...Bag\n  }\n}\n\nfragment VisaDetail on BookingInterface {\n  passengers {\n    visaRequired\n    id\n  }\n}\n\nfragment Passenger on Passenger {\n  title\n  firstname\n  lastname\n  birthday\n}\n\nfragment Bag on Bag {\n  type\n  quantity\n}\n\nfragment Header on BookingInterface {\n  bookingId: id(opaque: false)\n  status\n}\n\nfragment SectorInfoOneWay on BookingInterface {\n  ... on BookingOneWay {\n    sector {\n      ...SectorInfo\n    }\n  }\n}\n\nfragment SectorInfoMulticity on BookingInterface {\n  ... on BookingMulticity {\n    sectors {\n      ...SectorInfo\n    }\n  }\n}\n\nfragment SectorInfoReturn on BookingInterface {\n  ... on BookingReturn {\n    ...FromTo\n    inbound {\n      ...SectorDates\n    }\n    outbound {\n      ...SectorDates\n    }\n  }\n}\n\nfragment SegmentContainer on BookingInterface {\n  ...SegmentMap\n}\n\nfragment SegmentMap on BookingInterface {\n  ...MapLines\n  segmentLocations {\n    lat\n    lng\n  }\n}\n\nfragment MapLines on BookingInterface {\n  type\n  ...OneWaySegmentLines\n  ...ReturnSegmentLines\n  ...MulticitySegmentLines\n}\n\nfragment OneWaySegmentLines on BookingInterface {\n  ... on BookingOneWay {\n    sector {\n      ...DrawSegmentLine\n    }\n  }\n}\n\nfragment ReturnSegmentLines on BookingInterface {\n  ... on BookingReturn {\n    inbound {\n      ...DrawSegmentLine\n    }\n    outbound {\n      ...DrawSegmentLine\n    }\n  }\n}\n\nfragment MulticitySegmentLines on BookingInterface {\n  ... on BookingMulticity {\n    sectors {\n      ...DrawSegmentLine\n    }\n  }\n}\n\nfragment DrawSegmentLine on Sector {\n  segments {\n    departure {\n      stop {\n        coordinates {\n          latitude: lat\n          longitude: lng\n        }\n        id\n      }\n    }\n    arrival {\n      stop {\n        coordinates {\n          latitude: lat\n          longitude: lng\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment FromTo on FromToInterface {\n  departure {\n    ...CityName\n  }\n  arrival {\n    ...CityName\n  }\n  ...FromToIcon\n}\n\nfragment SectorDates on Sector {\n  departure {\n    ...SectorDate\n  }\n  arrival {\n    ...SectorDate\n  }\n  duration\n}\n\nfragment SectorDate on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment CityName on RouteStop {\n  stop {\n    countryFlagURL\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment FromToIcon on FromToInterface {\n  type\n}\n\nfragment SectorInfo on Sector {\n  ...FromTo\n  ...SectorDates\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bab57d93afd1e0305918568883c4fc6';
module.exports = node;
