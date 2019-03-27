/**
 * @flow
 * @relayHash 660a2ec16cad1929fff266eb2e63794d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultsList_data$ref = any;
export type OrderSearchInput = "ASC" | "DESC" | "%future added value";
export type SortSearchInput = "DATE" | "DURATION" | "POPULARITY" | "PRICE" | "QUALITY" | "%future added value";
export type ItinerariesOneWaySearchInput = {|
  order?: ?OrderSearchInput,
  sort?: ?SortSearchInput,
  passengers?: ?PassengersInput,
  itinerary: ItineraryOneWayInput,
|};
export type PassengersInput = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
|};
export type ItineraryOneWayInput = {|
  origin: LocationItineraryInput,
  destination?: ?LocationItineraryInput,
  outboundDate: DateRange,
|};
export type LocationItineraryInput = {|
  ids?: ?$ReadOnlyArray<?string>
|};
export type DateRange = {|
  start: any,
  end?: ?any,
|};
export type ResultsOneWayQueryVariables = {|
  input: ItinerariesOneWaySearchInput
|};
export type ResultsOneWayQueryResponse = {|
  +searchData: ?{|
    +$fragmentRefs: ResultsList_data$ref
  |}
|};
export type ResultsOneWayQuery = {|
  variables: ResultsOneWayQueryVariables,
  response: ResultsOneWayQueryResponse,
|};
*/


/*
query ResultsOneWayQuery(
  $input: ItinerariesOneWaySearchInput!
) {
  searchData: searchOneWayItineraries(input: $input) {
    ...ResultsList_data
  }
}

fragment ResultsList_data on ItineraryConnection {
  edges {
    node {
      id
      ...ItineraryCard_data
    }
  }
}

fragment ItineraryCard_data on Itinerary {
  sectors {
    ...RenderTripSectorItem_data
  }
  price {
    currency
    amount
  }
  ...ItineraryDetail_data
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

fragment ItineraryDetail_data on Itinerary {
  bookingToken
  ...SectorsList_data
}

fragment SectorsList_data on Itinerary {
  sectors {
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
  transporter {
    name
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

fragment TripSector_data on Sector {
  duration
  ...FlightTimes_data
  ...TripCities_data
  departure {
    ...LocalTime_data
  }
  ...Transporters_data
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

fragment Transporters_data on Sector {
  segments {
    transporter {
      name
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
    "type": "ItinerariesOneWaySearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ItinerariesOneWaySearchInput!"
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResultsOneWayQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchOneWayItineraries",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ItineraryConnection",
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
    "name": "ResultsOneWayQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "searchData",
        "name": "searchOneWayItineraries",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ItineraryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ItineraryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Itinerary",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sectors",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sector",
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
                            "name": "transporter",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Transporter",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/)
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
                    ]
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
    "name": "ResultsOneWayQuery",
    "id": null,
    "text": "query ResultsOneWayQuery(\n  $input: ItinerariesOneWaySearchInput!\n) {\n  searchData: searchOneWayItineraries(input: $input) {\n    ...ResultsList_data\n  }\n}\n\nfragment ResultsList_data on ItineraryConnection {\n  edges {\n    node {\n      id\n      ...ItineraryCard_data\n    }\n  }\n}\n\nfragment ItineraryCard_data on Itinerary {\n  sectors {\n    ...RenderTripSectorItem_data\n  }\n  price {\n    currency\n    amount\n  }\n  ...ItineraryDetail_data\n}\n\nfragment RenderTripSectorItem_data on Sector {\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n  stopoverDuration\n  ...TripSector_data\n}\n\nfragment ItineraryDetail_data on Itinerary {\n  bookingToken\n  ...SectorsList_data\n}\n\nfragment SectorsList_data on Itinerary {\n  sectors {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorDetail_data on Sector {\n  ...SectorStopoverDuration_data\n  ...SectorHeader_data\n  segments {\n    id\n    departure {\n      time {\n        local\n      }\n    }\n    arrival {\n      time {\n        local\n      }\n    }\n    ...Segment_data\n  }\n}\n\nfragment SectorStopoverDuration_data on Sector {\n  stopoverDuration\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment SectorHeader_data on Sector {\n  duration\n  arrival {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment Segment_data on Segment {\n  duration\n  arrival {\n    ...SegmentStopInfo_data\n  }\n  departure {\n    time {\n      local\n    }\n    ...SegmentStopInfo_data\n  }\n  transporter {\n    name\n  }\n}\n\nfragment SegmentStopInfo_data on RouteStop {\n  time {\n    local\n  }\n  stop {\n    name\n    locationId\n    id\n  }\n}\n\nfragment TripSector_data on Sector {\n  duration\n  ...FlightTimes_data\n  ...TripCities_data\n  departure {\n    ...LocalTime_data\n  }\n  ...Transporters_data\n}\n\nfragment FlightTimes_data on Sector {\n  arrival {\n    ...LocalTime_data\n  }\n  departure {\n    ...LocalTime_data\n  }\n}\n\nfragment TripCities_data on Sector {\n  arrival {\n    ...LocationName_data\n  }\n  departure {\n    ...LocationName_data\n  }\n}\n\nfragment LocalTime_data on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment Transporters_data on Sector {\n  segments {\n    transporter {\n      name\n    }\n    id\n  }\n}\n\nfragment LocationName_data on RouteStop {\n  stop {\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48e15b0a54601699fcdaa515f39612ea';
module.exports = node;
