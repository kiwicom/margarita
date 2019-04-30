/**
 * @flow
 * @relayHash 2b8a1dc5446905c72dd475d59f537e4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingDetailWrapper_data$ref = any;
export type BookingDetailQueryVariables = {|
  id: string
|};
export type BookingDetailQueryResponse = {|
  +bookingDetail: ?{|
    +$fragmentRefs: BookingDetailWrapper_data$ref
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
    ...BookingDetailWrapper_data
    id
  }
}

fragment BookingDetailWrapper_data on BookingInterface {
  ...SectorDetails_data
  ...Passengers_data
}

fragment SectorDetails_data on BookingInterface {
  __typename
  ...SectorInfoOneWay_data
  ...SectorInfoReturn_data
  ...SectorInfoMulticity_data
  ...Header_data
  ...SegmentContainer_data
}

fragment Passengers_data on BookingInterface {
  ...PassengersList_data
  ...VisaInfoSummary_data
}

fragment PassengersList_data on BookingInterface {
  passengers {
    id
    ...Passenger_data
  }
  bagInfo {
    type
    ...Bag_data
  }
}

fragment VisaInfoSummary_data on BookingInterface {
  passengers {
    visaRequired
    id
  }
}

fragment Passenger_data on Passenger {
  title
  firstname
  lastname
  birthday
}

fragment Bag_data on Bag {
  type
  quantity
}

fragment SectorInfoOneWay_data on OneWayInterface {
  sector {
    ...SectorInfo_data
  }
}

fragment SectorInfoReturn_data on ReturnInterface {
  ...FromTo_data
  inbound {
    ...SectorDates_data
  }
  outbound {
    ...SectorDates_data
  }
}

fragment SectorInfoMulticity_data on MulticityInterface {
  sectors {
    ...SectorInfo_data
  }
}

fragment Header_data on BookingInterface {
  bookingId: id(opaque: false)
  status
}

fragment SegmentContainer_data on BookingInterface {
  __typename
  ...SectorsListOneWay_data
  ...SectorsListReturn_data
  ...SectorsListMulticity_data
  ...SegmentMap_data
}

fragment SectorsListOneWay_data on BookingOneWay {
  sector {
    ...SectorDetail_data
  }
}

fragment SectorsListReturn_data on BookingReturn {
  inbound {
    ...SectorDetail_data
  }
  outbound {
    ...SectorDetail_data
  }
}

fragment SectorsListMulticity_data on BookingMulticity {
  sectors {
    ...SectorDetail_data
  }
}

fragment SegmentMap_data on BookingInterface {
  ...MapLines_data
  type
  ... on BookingOneWay {
    sector {
      segments {
        arrival {
          stop {
            locationId
            city {
              name
              id
            }
            coordinates {
              latitude: lat
              longitude: lng
            }
            id
          }
        }
        departure {
          stop {
            locationId
            city {
              name
              id
            }
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
  }
  ... on BookingReturn {
    inbound {
      segments {
        arrival {
          stop {
            locationId
            city {
              name
              id
            }
            coordinates {
              latitude: lat
              longitude: lng
            }
            id
          }
        }
        departure {
          stop {
            locationId
            city {
              name
              id
            }
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
    outbound {
      segments {
        arrival {
          stop {
            locationId
            city {
              name
              id
            }
            coordinates {
              latitude: lat
              longitude: lng
            }
            id
          }
        }
        departure {
          stop {
            locationId
            city {
              name
              id
            }
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
  }
  ... on BookingMulticity {
    sectors {
      segments {
        arrival {
          stop {
            locationId
            city {
              name
              id
            }
            coordinates {
              latitude: lat
              longitude: lng
            }
            id
          }
        }
        departure {
          stop {
            locationId
            city {
              name
              id
            }
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
  }
}

fragment MapLines_data on BookingInterface {
  __typename
  ...OneWaySegmentLines_data
  ...ReturnSegmentLines_data
  ...MulticitySegmentLines_data
}

fragment OneWaySegmentLines_data on BookingOneWay {
  sector {
    ...DrawSegmentLine_data
  }
}

fragment ReturnSegmentLines_data on BookingReturn {
  inbound {
    ...DrawSegmentLine_data
  }
  outbound {
    ...DrawSegmentLine_data
  }
}

fragment MulticitySegmentLines_data on BookingMulticity {
  sectors {
    ...DrawSegmentLine_data
  }
}

fragment DrawSegmentLine_data on Sector {
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

fragment SectorDetail_data on Sector {
  ...SectorStopoverDuration_data
  ...SectorHeader_data
  segments {
    id
    departure {
      time {
        local
      }
    }
    arrival {
      time {
        local
      }
    }
    ...Segment_data
  }
}

fragment SectorStopoverDuration_data on Sector {
  stopoverDuration
  departure {
    stop {
      city {
        name
        id
      }
      id
    }
  }
}

fragment SectorHeader_data on Sector {
  duration
  arrival {
    stop {
      city {
        name
        id
      }
      id
    }
  }
}

fragment Segment_data on Segment {
  duration
  arrival {
    ...SegmentStopInfo_data
  }
  departure {
    time {
      local
    }
    ...SegmentStopInfo_data
  }
  carrier {
    name
    code
  }
}

fragment SegmentStopInfo_data on RouteStop {
  time {
    local
  }
  stop {
    name
    locationId
    id
  }
}

fragment SectorInfo_data on Sector {
  ...FromTo_data
  ...SectorDates_data
}

fragment FromTo_data on FromToInterface {
  departure {
    ...CityName_data
  }
  arrival {
    ...CityName_data
  }
  ...FromToIcon_data
}

fragment SectorDates_data on Sector {
  departure {
    ...SectorDate_data
  }
  arrival {
    ...SectorDate_data
  }
  duration
}

fragment SectorDate_data on RouteStop {
  time {
    local
  }
}

fragment CityName_data on RouteStop {
  stop {
    countryFlagURL
    city {
      name
      id
    }
    id
  }
}

fragment FromToIcon_data on FromToInterface {
  __typename
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
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ]
},
v6 = {
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
    (v5/*: any*/),
    (v4/*: any*/)
  ]
},
v7 = {
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
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
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
  (v2/*: any*/),
  (v9/*: any*/)
],
v11 = [
  (v6/*: any*/)
],
v12 = [
  (v7/*: any*/)
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
  (v9/*: any*/)
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "stopoverDuration",
  "args": null,
  "storageKey": null
},
v16 = [
  (v7/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stop",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      (v4/*: any*/),
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
      (v5/*: any*/)
    ]
  }
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "segments",
  "storageKey": null,
  "args": null,
  "concreteType": "Segment",
  "plural": true,
  "selections": [
    (v4/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v16/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v16/*: any*/)
    },
    (v9/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carrier",
      "storageKey": null,
      "args": null,
      "concreteType": "Carrier",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v18 = [
  (v15/*: any*/),
  (v17/*: any*/)
],
v19 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stop",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      (v5/*: any*/),
      (v4/*: any*/)
    ]
  }
],
v20 = [
  (v15/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v19/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v19/*: any*/)
  },
  (v17/*: any*/)
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
            "name": "BookingDetailWrapper_data",
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
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sector",
            "storageKey": null,
            "args": null,
            "concreteType": "Sector",
            "plural": false,
            "selections": (v10/*: any*/)
          },
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sectors",
            "storageKey": null,
            "args": null,
            "concreteType": "Sector",
            "plural": true,
            "selections": (v10/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": "bookingId",
            "name": "id",
            "args": [
              {
                "kind": "Literal",
                "name": "opaque",
                "value": false
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
          (v14/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "passengers",
            "storageKey": null,
            "args": null,
            "concreteType": "Passenger",
            "plural": true,
            "selections": [
              (v4/*: any*/),
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
              (v14/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "quantity",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v4/*: any*/),
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
                "selections": (v18/*: any*/)
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
                "selections": (v20/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v20/*: any*/)
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
                "selections": (v18/*: any*/)
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
    "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    __typename\n    ...BookingDetailWrapper_data\n    id\n  }\n}\n\nfragment BookingDetailWrapper_data on BookingInterface {\n  ...SectorDetails_data\n  ...Passengers_data\n}\n\nfragment SectorDetails_data on BookingInterface {\n  __typename\n  ...SectorInfoOneWay_data\n  ...SectorInfoReturn_data\n  ...SectorInfoMulticity_data\n  ...Header_data\n  ...SegmentContainer_data\n}\n\nfragment Passengers_data on BookingInterface {\n  ...PassengersList_data\n  ...VisaInfoSummary_data\n}\n\nfragment PassengersList_data on BookingInterface {\n  passengers {\n    id\n    ...Passenger_data\n  }\n  bagInfo {\n    type\n    ...Bag_data\n  }\n}\n\nfragment VisaInfoSummary_data on BookingInterface {\n  passengers {\n    visaRequired\n    id\n  }\n}\n\nfragment Passenger_data on Passenger {\n  title\n  firstname\n  lastname\n  birthday\n}\n\nfragment Bag_data on Bag {\n  type\n  quantity\n}\n\nfragment SectorInfoOneWay_data on OneWayInterface {\n  sector {\n    ...SectorInfo_data\n  }\n}\n\nfragment SectorInfoReturn_data on ReturnInterface {\n  ...FromTo_data\n  inbound {\n    ...SectorDates_data\n  }\n  outbound {\n    ...SectorDates_data\n  }\n}\n\nfragment SectorInfoMulticity_data on MulticityInterface {\n  sectors {\n    ...SectorInfo_data\n  }\n}\n\nfragment Header_data on BookingInterface {\n  bookingId: id(opaque: false)\n  status\n}\n\nfragment SegmentContainer_data on BookingInterface {\n  __typename\n  ...SectorsListOneWay_data\n  ...SectorsListReturn_data\n  ...SectorsListMulticity_data\n  ...SegmentMap_data\n}\n\nfragment SectorsListOneWay_data on BookingOneWay {\n  sector {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorsListReturn_data on BookingReturn {\n  inbound {\n    ...SectorDetail_data\n  }\n  outbound {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorsListMulticity_data on BookingMulticity {\n  sectors {\n    ...SectorDetail_data\n  }\n}\n\nfragment SegmentMap_data on BookingInterface {\n  ...MapLines_data\n  type\n  ... on BookingOneWay {\n    sector {\n      segments {\n        arrival {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        departure {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  ... on BookingReturn {\n    inbound {\n      segments {\n        arrival {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        departure {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        id\n      }\n    }\n    outbound {\n      segments {\n        arrival {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        departure {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  ... on BookingMulticity {\n    sectors {\n      segments {\n        arrival {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        departure {\n          stop {\n            locationId\n            city {\n              name\n              id\n            }\n            coordinates {\n              latitude: lat\n              longitude: lng\n            }\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MapLines_data on BookingInterface {\n  __typename\n  ...OneWaySegmentLines_data\n  ...ReturnSegmentLines_data\n  ...MulticitySegmentLines_data\n}\n\nfragment OneWaySegmentLines_data on BookingOneWay {\n  sector {\n    ...DrawSegmentLine_data\n  }\n}\n\nfragment ReturnSegmentLines_data on BookingReturn {\n  inbound {\n    ...DrawSegmentLine_data\n  }\n  outbound {\n    ...DrawSegmentLine_data\n  }\n}\n\nfragment MulticitySegmentLines_data on BookingMulticity {\n  sectors {\n    ...DrawSegmentLine_data\n  }\n}\n\nfragment DrawSegmentLine_data on Sector {\n  segments {\n    departure {\n      stop {\n        coordinates {\n          latitude: lat\n          longitude: lng\n        }\n        id\n      }\n    }\n    arrival {\n      stop {\n        coordinates {\n          latitude: lat\n          longitude: lng\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SectorDetail_data on Sector {\n  ...SectorStopoverDuration_data\n  ...SectorHeader_data\n  segments {\n    id\n    departure {\n      time {\n        local\n      }\n    }\n    arrival {\n      time {\n        local\n      }\n    }\n    ...Segment_data\n  }\n}\n\nfragment SectorStopoverDuration_data on Sector {\n  stopoverDuration\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment SectorHeader_data on Sector {\n  duration\n  arrival {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment Segment_data on Segment {\n  duration\n  arrival {\n    ...SegmentStopInfo_data\n  }\n  departure {\n    time {\n      local\n    }\n    ...SegmentStopInfo_data\n  }\n  carrier {\n    name\n    code\n  }\n}\n\nfragment SegmentStopInfo_data on RouteStop {\n  time {\n    local\n  }\n  stop {\n    name\n    locationId\n    id\n  }\n}\n\nfragment SectorInfo_data on Sector {\n  ...FromTo_data\n  ...SectorDates_data\n}\n\nfragment FromTo_data on FromToInterface {\n  departure {\n    ...CityName_data\n  }\n  arrival {\n    ...CityName_data\n  }\n  ...FromToIcon_data\n}\n\nfragment SectorDates_data on Sector {\n  departure {\n    ...SectorDate_data\n  }\n  arrival {\n    ...SectorDate_data\n  }\n  duration\n}\n\nfragment SectorDate_data on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment CityName_data on RouteStop {\n  stop {\n    countryFlagURL\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment FromToIcon_data on FromToInterface {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '81aab9d14deeef5ce6527664cd54305b';
module.exports = node;
