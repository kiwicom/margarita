/**
 * @flow
 * @relayHash 6cfabfe873d1420e8470824fe7a0bd00
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItineraryCard_data$ref = any;
export type ItineraryCardQueryVariables = {||};
export type ItineraryCardQueryResponse = {|
  +searchData: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: ItineraryCard_data$ref
      |}
    |}>
  |}
|};
export type ItineraryCardQuery = {|
  variables: ItineraryCardQueryVariables,
  response: ItineraryCardQueryResponse,
|};
*/


/*
query ItineraryCardQuery {
  searchData: searchOneWayItineraries(input: {itinerary: {origin: {ids: ["abc"]}, destination: {ids: ["def"]}, outboundDate: {start: "2019-01-01"}}}) {
    edges {
      node {
        __typename
        ...ItineraryCard_data
        id
      }
    }
  }
}

fragment ItineraryCard_data on ItineraryInterface {
  __typename
  ... on ItineraryOneWay {
    ...TripSectorOneWay_itinerary
  }
  ... on ItineraryReturn {
    ...TripSectorReturn_itinerary
  }
  price {
    currency
    amount
  }
  ...ItineraryDetail_data
}

fragment TripSectorOneWay_itinerary on ItineraryOneWay {
  sector {
    ...RenderTripSectorItem_data
  }
}

fragment TripSectorReturn_itinerary on ItineraryReturn {
  inbound {
    ...RenderTripSectorItem_data
  }
  outbound {
    ...RenderTripSectorItem_data
  }
}

fragment ItineraryDetail_data on ItineraryInterface {
  __typename
  bookingToken
  ... on ItineraryOneWay {
    ...ItineraryOneWay_itinerary
  }
  ... on ItineraryReturn {
    ...ItineraryReturn_itinerary
  }
}

fragment ItineraryOneWay_itinerary on ItineraryOneWay {
  sector {
    ...SectorDetail_data
  }
}

fragment ItineraryReturn_itinerary on ItineraryReturn {
  inbound {
    ...SectorDetail_data
  }
  outbound {
    ...SectorDetail_data
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

fragment RenderTripSectorItem_data on Sector {
  departure {
    stop {
      city {
        name
        id
      }
      id
    }
  }
  stopoverDuration
  ...TripSector_data
}

fragment TripSector_data on Sector {
  duration
  ...FlightTimes_data
  ...TripCities_data
  departure {
    ...LocalTime_data
  }
  ...Carriers_data
}

fragment FlightTimes_data on Sector {
  arrival {
    ...LocalTime_data
  }
  departure {
    ...LocalTime_data
  }
}

fragment TripCities_data on Sector {
  arrival {
    ...LocationName_data
  }
  departure {
    ...LocationName_data
  }
}

fragment LocalTime_data on RouteStop {
  time {
    local
  }
}

fragment Carriers_data on Sector {
  segments {
    carrier {
      name
      code
    }
    id
  }
}

fragment LocationName_data on RouteStop {
  stop {
    city {
      name
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "itinerary": {
        "destination": {
          "ids": [
            "def"
          ]
        },
        "origin": {
          "ids": [
            "abc"
          ]
        },
        "outboundDate": {
          "start": "2019-01-01"
        }
      }
    }
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
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
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        (v1/*: any*/)
      ]
    },
    (v1/*: any*/)
  ]
},
v4 = {
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stop",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      (v1/*: any*/)
    ]
  }
],
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/)
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "stopoverDuration",
    "args": null,
    "storageKey": null
  },
  (v5/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v3/*: any*/)
    ]
  },
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
        "name": "carrier",
        "storageKey": null,
        "args": null,
        "concreteType": "Carrier",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          }
        ]
      },
      (v1/*: any*/),
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
      (v5/*: any*/)
    ]
  }
],
v8 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v9 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v10 = {
  "type": "Sector",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v11 = {
  "type": "RouteStop",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v12 = {
  "type": "Int",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v13 = {
  "type": "Location",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v14 = {
  "type": "Segment",
  "enumValues": null,
  "plural": true,
  "nullable": true
},
v15 = {
  "type": "LocationArea",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v16 = {
  "type": "DateType",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v17 = {
  "type": "Carrier",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v18 = {
  "type": "DateTime",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ItineraryCardQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchOneWayItineraries",
        "storageKey": "searchOneWayItineraries(input:{\"itinerary\":{\"destination\":{\"ids\":[\"def\"]},\"origin\":{\"ids\":[\"abc\"]},\"outboundDate\":{\"start\":\"2019-01-01\"}}})",
        "args": (v0/*: any*/),
        "concreteType": "ItineraryInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ItineraryInterfaceEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ItineraryCard_data",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ItineraryCardQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchOneWayItineraries",
        "storageKey": "searchOneWayItineraries(input:{\"itinerary\":{\"destination\":{\"ids\":[\"def\"]},\"origin\":{\"ids\":[\"abc\"]},\"outboundDate\":{\"start\":\"2019-01-01\"}}})",
        "args": (v0/*: any*/),
        "concreteType": "ItineraryInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ItineraryInterfaceEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bookingToken",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "type": "ItineraryOneWay",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sector",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sector",
                        "plural": false,
                        "selections": (v7/*: any*/)
                      }
                    ]
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "ItineraryReturn",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "inbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sector",
                        "plural": false,
                        "selections": (v7/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sector",
                        "plural": false,
                        "selections": (v7/*: any*/)
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ItineraryCardQuery",
    "id": null,
    "text": "query ItineraryCardQuery {\n  searchData: searchOneWayItineraries(input: {itinerary: {origin: {ids: [\"abc\"]}, destination: {ids: [\"def\"]}, outboundDate: {start: \"2019-01-01\"}}}) {\n    edges {\n      node {\n        __typename\n        ...ItineraryCard_data\n        id\n      }\n    }\n  }\n}\n\nfragment ItineraryCard_data on ItineraryInterface {\n  __typename\n  ... on ItineraryOneWay {\n    ...TripSectorOneWay_itinerary\n  }\n  ... on ItineraryReturn {\n    ...TripSectorReturn_itinerary\n  }\n  price {\n    currency\n    amount\n  }\n  ...ItineraryDetail_data\n}\n\nfragment TripSectorOneWay_itinerary on ItineraryOneWay {\n  sector {\n    ...RenderTripSectorItem_data\n  }\n}\n\nfragment TripSectorReturn_itinerary on ItineraryReturn {\n  inbound {\n    ...RenderTripSectorItem_data\n  }\n  outbound {\n    ...RenderTripSectorItem_data\n  }\n}\n\nfragment ItineraryDetail_data on ItineraryInterface {\n  __typename\n  bookingToken\n  ... on ItineraryOneWay {\n    ...ItineraryOneWay_itinerary\n  }\n  ... on ItineraryReturn {\n    ...ItineraryReturn_itinerary\n  }\n}\n\nfragment ItineraryOneWay_itinerary on ItineraryOneWay {\n  sector {\n    ...SectorDetail_data\n  }\n}\n\nfragment ItineraryReturn_itinerary on ItineraryReturn {\n  inbound {\n    ...SectorDetail_data\n  }\n  outbound {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorDetail_data on Sector {\n  ...SectorStopoverDuration_data\n  ...SectorHeader_data\n  segments {\n    id\n    departure {\n      time {\n        local\n      }\n    }\n    arrival {\n      time {\n        local\n      }\n    }\n    ...Segment_data\n  }\n}\n\nfragment SectorStopoverDuration_data on Sector {\n  stopoverDuration\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment SectorHeader_data on Sector {\n  duration\n  arrival {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment Segment_data on Segment {\n  duration\n  arrival {\n    ...SegmentStopInfo_data\n  }\n  departure {\n    time {\n      local\n    }\n    ...SegmentStopInfo_data\n  }\n  carrier {\n    name\n    code\n  }\n}\n\nfragment SegmentStopInfo_data on RouteStop {\n  time {\n    local\n  }\n  stop {\n    name\n    locationId\n    id\n  }\n}\n\nfragment RenderTripSectorItem_data on Sector {\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n  stopoverDuration\n  ...TripSector_data\n}\n\nfragment TripSector_data on Sector {\n  duration\n  ...FlightTimes_data\n  ...TripCities_data\n  departure {\n    ...LocalTime_data\n  }\n  ...Carriers_data\n}\n\nfragment FlightTimes_data on Sector {\n  arrival {\n    ...LocalTime_data\n  }\n  departure {\n    ...LocalTime_data\n  }\n}\n\nfragment TripCities_data on Sector {\n  arrival {\n    ...LocationName_data\n  }\n  departure {\n    ...LocationName_data\n  }\n}\n\nfragment LocalTime_data on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment Carriers_data on Sector {\n  segments {\n    carrier {\n      name\n      code\n    }\n    id\n  }\n}\n\nfragment LocationName_data on RouteStop {\n  stop {\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "searchData": {
          "type": "ItineraryInterfaceConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "searchData.edges": {
          "type": "ItineraryInterfaceEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "searchData.edges.node": {
          "type": "ItineraryInterface",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "searchData.edges.node.id": (v8/*: any*/),
        "searchData.edges.node.__typename": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "searchData.edges.node.price": {
          "type": "Price",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "searchData.edges.node.price.currency": (v9/*: any*/),
        "searchData.edges.node.price.amount": {
          "type": "Float",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "searchData.edges.node.bookingToken": (v9/*: any*/),
        "searchData.edges.node.sector": (v10/*: any*/),
        "searchData.edges.node.inbound": (v10/*: any*/),
        "searchData.edges.node.outbound": (v10/*: any*/),
        "searchData.edges.node.sector.departure": (v11/*: any*/),
        "searchData.edges.node.sector.stopoverDuration": (v12/*: any*/),
        "searchData.edges.node.inbound.departure": (v11/*: any*/),
        "searchData.edges.node.inbound.stopoverDuration": (v12/*: any*/),
        "searchData.edges.node.outbound.departure": (v11/*: any*/),
        "searchData.edges.node.outbound.stopoverDuration": (v12/*: any*/),
        "searchData.edges.node.sector.departure.stop": (v13/*: any*/),
        "searchData.edges.node.sector.duration": (v12/*: any*/),
        "searchData.edges.node.inbound.departure.stop": (v13/*: any*/),
        "searchData.edges.node.inbound.duration": (v12/*: any*/),
        "searchData.edges.node.outbound.departure.stop": (v13/*: any*/),
        "searchData.edges.node.outbound.duration": (v12/*: any*/),
        "searchData.edges.node.sector.segments": (v14/*: any*/),
        "searchData.edges.node.inbound.segments": (v14/*: any*/),
        "searchData.edges.node.outbound.segments": (v14/*: any*/),
        "searchData.edges.node.sector.departure.stop.city": (v15/*: any*/),
        "searchData.edges.node.sector.departure.stop.id": (v8/*: any*/),
        "searchData.edges.node.sector.arrival": (v11/*: any*/),
        "searchData.edges.node.inbound.departure.stop.city": (v15/*: any*/),
        "searchData.edges.node.inbound.departure.stop.id": (v8/*: any*/),
        "searchData.edges.node.inbound.arrival": (v11/*: any*/),
        "searchData.edges.node.outbound.departure.stop.city": (v15/*: any*/),
        "searchData.edges.node.outbound.departure.stop.id": (v8/*: any*/),
        "searchData.edges.node.outbound.arrival": (v11/*: any*/),
        "searchData.edges.node.sector.segments.id": (v8/*: any*/),
        "searchData.edges.node.sector.segments.departure": (v11/*: any*/),
        "searchData.edges.node.sector.segments.arrival": (v11/*: any*/),
        "searchData.edges.node.inbound.segments.id": (v8/*: any*/),
        "searchData.edges.node.inbound.segments.departure": (v11/*: any*/),
        "searchData.edges.node.inbound.segments.arrival": (v11/*: any*/),
        "searchData.edges.node.outbound.segments.id": (v8/*: any*/),
        "searchData.edges.node.outbound.segments.departure": (v11/*: any*/),
        "searchData.edges.node.outbound.segments.arrival": (v11/*: any*/),
        "searchData.edges.node.sector.departure.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.sector.departure.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.sector.departure.time": (v16/*: any*/),
        "searchData.edges.node.sector.segments.carrier": (v17/*: any*/),
        "searchData.edges.node.inbound.departure.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.inbound.departure.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.inbound.departure.time": (v16/*: any*/),
        "searchData.edges.node.inbound.segments.carrier": (v17/*: any*/),
        "searchData.edges.node.outbound.departure.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.outbound.departure.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.outbound.departure.time": (v16/*: any*/),
        "searchData.edges.node.outbound.segments.carrier": (v17/*: any*/),
        "searchData.edges.node.sector.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.sector.segments.departure.time": (v16/*: any*/),
        "searchData.edges.node.sector.segments.arrival.time": (v16/*: any*/),
        "searchData.edges.node.sector.segments.duration": (v12/*: any*/),
        "searchData.edges.node.inbound.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.inbound.segments.departure.time": (v16/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.time": (v16/*: any*/),
        "searchData.edges.node.inbound.segments.duration": (v12/*: any*/),
        "searchData.edges.node.outbound.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.outbound.segments.departure.time": (v16/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.time": (v16/*: any*/),
        "searchData.edges.node.outbound.segments.duration": (v12/*: any*/),
        "searchData.edges.node.sector.arrival.time": (v16/*: any*/),
        "searchData.edges.node.sector.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.sector.segments.carrier.name": (v9/*: any*/),
        "searchData.edges.node.sector.segments.carrier.code": (v9/*: any*/),
        "searchData.edges.node.inbound.arrival.time": (v16/*: any*/),
        "searchData.edges.node.inbound.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.inbound.segments.carrier.name": (v9/*: any*/),
        "searchData.edges.node.inbound.segments.carrier.code": (v9/*: any*/),
        "searchData.edges.node.outbound.arrival.time": (v16/*: any*/),
        "searchData.edges.node.outbound.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.outbound.segments.carrier.name": (v9/*: any*/),
        "searchData.edges.node.outbound.segments.carrier.code": (v9/*: any*/),
        "searchData.edges.node.sector.arrival.stop.city": (v15/*: any*/),
        "searchData.edges.node.sector.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.sector.segments.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.sector.segments.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.inbound.arrival.stop.city": (v15/*: any*/),
        "searchData.edges.node.inbound.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.inbound.segments.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.outbound.arrival.stop.city": (v15/*: any*/),
        "searchData.edges.node.outbound.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.outbound.segments.departure.time.local": (v18/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.sector.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.inbound.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.outbound.arrival.time.local": (v18/*: any*/),
        "searchData.edges.node.sector.arrival.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.sector.arrival.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.sector.segments.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.sector.segments.departure.stop": (v13/*: any*/),
        "searchData.edges.node.inbound.arrival.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.inbound.arrival.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.inbound.segments.departure.stop": (v13/*: any*/),
        "searchData.edges.node.outbound.arrival.stop.city.name": (v9/*: any*/),
        "searchData.edges.node.outbound.arrival.stop.city.id": (v8/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.stop": (v13/*: any*/),
        "searchData.edges.node.outbound.segments.departure.stop": (v13/*: any*/),
        "searchData.edges.node.sector.segments.arrival.stop.name": (v9/*: any*/),
        "searchData.edges.node.sector.segments.arrival.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.sector.segments.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.sector.segments.departure.stop.name": (v9/*: any*/),
        "searchData.edges.node.sector.segments.departure.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.sector.segments.departure.stop.id": (v8/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.stop.name": (v9/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.inbound.segments.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.inbound.segments.departure.stop.name": (v9/*: any*/),
        "searchData.edges.node.inbound.segments.departure.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.inbound.segments.departure.stop.id": (v8/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.stop.name": (v9/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.outbound.segments.arrival.stop.id": (v8/*: any*/),
        "searchData.edges.node.outbound.segments.departure.stop.name": (v9/*: any*/),
        "searchData.edges.node.outbound.segments.departure.stop.locationId": (v9/*: any*/),
        "searchData.edges.node.outbound.segments.departure.stop.id": (v8/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b7b0128eaf7dc4f2c2322a08eadeed3';
module.exports = node;
