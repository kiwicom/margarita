/**
 * @flow
 * @relayHash 4dfd0dcd31df57229c600b149bdfc774
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultsList_data$ref = any;
export type OrderSearchInput = "ASC" | "DESC" | "%future added value";
export type SortSearchInput = "DATE" | "DURATION" | "POPULARITY" | "PRICE" | "QUALITY" | "%future added value";
export type ItinerariesReturnSearchInput = {|
  order?: ?OrderSearchInput,
  sort?: ?SortSearchInput,
  limit?: ?number,
  passengers?: ?PassengersInput,
  itinerary: ItineraryReturnInput,
|};
export type PassengersInput = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
|};
export type ItineraryReturnInput = {|
  origin: LocationItineraryInput,
  destination?: ?LocationItineraryInput,
  outboundDate: DateRange,
  inboundDate?: ?DateRange,
  nightsInDestination?: ?NightsInDestination,
|};
export type LocationItineraryInput = {|
  ids?: ?$ReadOnlyArray<?string>
|};
export type DateRange = {|
  start: any,
  end?: ?any,
|};
export type NightsInDestination = {|
  from?: ?number,
  to?: ?number,
|};
export type ReturnResultsQueryVariables = {|
  input: ItinerariesReturnSearchInput
|};
export type ReturnResultsQueryResponse = {|
  +searchData: ?{|
    +$fragmentRefs: ResultsList_data$ref
  |}
|};
export type ReturnResultsQuery = {|
  variables: ReturnResultsQueryVariables,
  response: ReturnResultsQueryResponse,
|};
*/


/*
query ReturnResultsQuery(
  $input: ItinerariesReturnSearchInput!
) {
  searchData: searchReturnItineraries(input: $input) {
    ...ResultsList_data
  }
}

fragment ResultsList_data on ItineraryInterfaceConnection {
  edges {
    node {
      __typename
      id
      ...ItineraryCard_data
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItinerariesReturnSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
        (v3/*: any*/),
        (v2/*: any*/)
      ]
    },
    (v2/*: any*/)
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
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
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
      (v2/*: any*/)
    ]
  }
],
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/)
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "stopoverDuration",
    "args": null,
    "storageKey": null
  },
  (v6/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      (v5/*: any*/),
      (v4/*: any*/)
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
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          }
        ]
      },
      (v2/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "departure",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": (v7/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "arrival",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": (v7/*: any*/)
      },
      (v6/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ReturnResultsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchReturnItineraries",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ItineraryInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ResultsList_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReturnResultsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchReturnItineraries",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                        "selections": (v8/*: any*/)
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
                        "selections": (v8/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sector",
                        "plural": false,
                        "selections": (v8/*: any*/)
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
    "name": "ReturnResultsQuery",
    "id": null,
    "text": "query ReturnResultsQuery(\n  $input: ItinerariesReturnSearchInput!\n) {\n  searchData: searchReturnItineraries(input: $input) {\n    ...ResultsList_data\n  }\n}\n\nfragment ResultsList_data on ItineraryInterfaceConnection {\n  edges {\n    node {\n      __typename\n      id\n      ...ItineraryCard_data\n    }\n  }\n}\n\nfragment ItineraryCard_data on ItineraryInterface {\n  __typename\n  ... on ItineraryOneWay {\n    ...TripSectorOneWay_itinerary\n  }\n  ... on ItineraryReturn {\n    ...TripSectorReturn_itinerary\n  }\n  price {\n    currency\n    amount\n  }\n  ...ItineraryDetail_data\n}\n\nfragment TripSectorOneWay_itinerary on ItineraryOneWay {\n  sector {\n    ...RenderTripSectorItem_data\n  }\n}\n\nfragment TripSectorReturn_itinerary on ItineraryReturn {\n  inbound {\n    ...RenderTripSectorItem_data\n  }\n  outbound {\n    ...RenderTripSectorItem_data\n  }\n}\n\nfragment ItineraryDetail_data on ItineraryInterface {\n  __typename\n  bookingToken\n  ... on ItineraryOneWay {\n    ...ItineraryOneWay_itinerary\n  }\n  ... on ItineraryReturn {\n    ...ItineraryReturn_itinerary\n  }\n}\n\nfragment ItineraryOneWay_itinerary on ItineraryOneWay {\n  sector {\n    ...SectorDetail_data\n  }\n}\n\nfragment ItineraryReturn_itinerary on ItineraryReturn {\n  inbound {\n    ...SectorDetail_data\n  }\n  outbound {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorDetail_data on Sector {\n  ...SectorStopoverDuration_data\n  ...SectorHeader_data\n  segments {\n    id\n    departure {\n      time {\n        local\n      }\n    }\n    arrival {\n      time {\n        local\n      }\n    }\n    ...Segment_data\n  }\n}\n\nfragment SectorStopoverDuration_data on Sector {\n  stopoverDuration\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment SectorHeader_data on Sector {\n  duration\n  arrival {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment Segment_data on Segment {\n  duration\n  arrival {\n    ...SegmentStopInfo_data\n  }\n  departure {\n    time {\n      local\n    }\n    ...SegmentStopInfo_data\n  }\n  carrier {\n    name\n    code\n  }\n}\n\nfragment SegmentStopInfo_data on RouteStop {\n  time {\n    local\n  }\n  stop {\n    name\n    locationId\n    id\n  }\n}\n\nfragment RenderTripSectorItem_data on Sector {\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n  stopoverDuration\n  ...TripSector_data\n}\n\nfragment TripSector_data on Sector {\n  duration\n  ...FlightTimes_data\n  ...TripCities_data\n  departure {\n    ...LocalTime_data\n  }\n  ...Carriers_data\n}\n\nfragment FlightTimes_data on Sector {\n  arrival {\n    ...LocalTime_data\n  }\n  departure {\n    ...LocalTime_data\n  }\n}\n\nfragment TripCities_data on Sector {\n  arrival {\n    ...LocationName_data\n  }\n  departure {\n    ...LocationName_data\n  }\n}\n\nfragment LocalTime_data on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment Carriers_data on Sector {\n  segments {\n    carrier {\n      name\n      code\n    }\n    id\n  }\n}\n\nfragment LocationName_data on RouteStop {\n  stop {\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92b1b886943cad7161ce49c23470fd12';
module.exports = node;
