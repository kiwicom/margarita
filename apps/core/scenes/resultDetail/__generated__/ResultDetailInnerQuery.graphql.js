/**
 * @flow
 * @relayHash 045c4af4681032f29ee7d2aee6feaccd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultDetailInner_data$ref = any;
export type ItineraryCheckInput = {|
  bookingToken: string,
  bags: number,
  passengers: PassengersInput,
|};
export type PassengersInput = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
|};
export type ResultDetailInnerQueryVariables = {|
  input: ItineraryCheckInput
|};
export type ResultDetailInnerQueryResponse = {|
  +$fragmentRefs: ResultDetailInner_data$ref
|};
export type ResultDetailInnerQuery = {|
  variables: ResultDetailInnerQueryVariables,
  response: ResultDetailInnerQueryResponse,
|};
*/


/*
query ResultDetailInnerQuery(
  $input: ItineraryCheckInput!
) {
  ...ResultDetailInner_data_2VV6jB
}

fragment ResultDetailInner_data_2VV6jB on RootQuery {
  checkItinerary(input: $input) {
    __typename
    isChecked
    isValid
    ...ResultDetailContent_itinerary
    id
  }
}

fragment ResultDetailContent_itinerary on ItineraryInterface {
  isChecked
  price {
    currency
    amount
  }
  ...ResultDetailPassenger_itinerary
  ...ItinerarySectorDetails_itinerary
}

fragment ResultDetailPassenger_itinerary on ItineraryInterface {
  ...PassengerForm_itinerary
}

fragment ItinerarySectorDetails_itinerary on ItineraryInterface {
  __typename
  ...ItineraryOneWay_itinerary
  ...ItineraryReturn_itinerary
  ...SectorInfoOneWay_data
  ...SectorInfoReturn_data
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

fragment SectorInfo_data on Sector {
  ...FromTo_data
  ...SectorDates_data
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

fragment PassengerForm_itinerary on ItineraryInterface {
  ...BaggageBundles_itinerary
}

fragment BaggageBundles_itinerary on ItineraryInterface {
  holdBagOptions {
    ...BaggageBundle_bagOption
  }
}

fragment BaggageBundle_bagOption on HoldBagOption {
  quantity
  dimensions
  weight
  price {
    amount
    currency
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItineraryCheckInput!",
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
  "name": "currency",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/)
  ]
},
v8 = {
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
    (v7/*: any*/),
    (v6/*: any*/)
  ]
},
v9 = {
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
v10 = [
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v12 = [
  (v8/*: any*/)
],
v13 = [
  (v9/*: any*/)
],
v14 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v13/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v13/*: any*/)
  },
  (v11/*: any*/)
],
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "stopoverDuration",
  "args": null,
  "storageKey": null
},
v16 = [
  (v9/*: any*/),
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
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
        "args": null,
        "storageKey": null
      },
      (v6/*: any*/)
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
    (v6/*: any*/),
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
    (v11/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carrier",
      "storageKey": null,
      "args": null,
      "concreteType": "Carrier",
      "plural": false,
      "selections": [
        (v5/*: any*/),
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stop",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      (v6/*: any*/)
    ]
  }
],
v19 = [
  (v15/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v18/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v18/*: any*/)
  },
  (v17/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResultDetailInnerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ResultDetailInner_data",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultDetailInnerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "checkItinerary",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isChecked",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isValid",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "holdBagOptions",
            "storageKey": null,
            "args": null,
            "concreteType": "HoldBagOption",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "quantity",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "dimensions",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "weight",
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
                  (v3/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          },
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sector",
            "storageKey": null,
            "args": null,
            "concreteType": "Sector",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              (v4/*: any*/),
              (v11/*: any*/)
            ]
          },
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "inbound",
            "storageKey": null,
            "args": null,
            "concreteType": "Sector",
            "plural": false,
            "selections": (v14/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "outbound",
            "storageKey": null,
            "args": null,
            "concreteType": "Sector",
            "plural": false,
            "selections": (v14/*: any*/)
          },
          (v6/*: any*/),
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
                "selections": [
                  (v15/*: any*/),
                  (v17/*: any*/)
                ]
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
                "selections": (v19/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v19/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ResultDetailInnerQuery",
    "id": null,
    "text": "query ResultDetailInnerQuery(\n  $input: ItineraryCheckInput!\n) {\n  ...ResultDetailInner_data_2VV6jB\n}\n\nfragment ResultDetailInner_data_2VV6jB on RootQuery {\n  checkItinerary(input: $input) {\n    __typename\n    isChecked\n    isValid\n    ...ResultDetailContent_itinerary\n    id\n  }\n}\n\nfragment ResultDetailContent_itinerary on ItineraryInterface {\n  isChecked\n  price {\n    currency\n    amount\n  }\n  ...ResultDetailPassenger_itinerary\n  ...ItinerarySectorDetails_itinerary\n}\n\nfragment ResultDetailPassenger_itinerary on ItineraryInterface {\n  ...PassengerForm_itinerary\n}\n\nfragment ItinerarySectorDetails_itinerary on ItineraryInterface {\n  __typename\n  ...ItineraryOneWay_itinerary\n  ...ItineraryReturn_itinerary\n  ...SectorInfoOneWay_data\n  ...SectorInfoReturn_data\n}\n\nfragment ItineraryOneWay_itinerary on ItineraryOneWay {\n  sector {\n    ...SectorDetail_data\n  }\n}\n\nfragment ItineraryReturn_itinerary on ItineraryReturn {\n  inbound {\n    ...SectorDetail_data\n  }\n  outbound {\n    ...SectorDetail_data\n  }\n}\n\nfragment SectorInfoOneWay_data on OneWayInterface {\n  sector {\n    ...SectorInfo_data\n  }\n}\n\nfragment SectorInfoReturn_data on ReturnInterface {\n  ...FromTo_data\n  inbound {\n    ...SectorDates_data\n  }\n  outbound {\n    ...SectorDates_data\n  }\n}\n\nfragment FromTo_data on FromToInterface {\n  departure {\n    ...CityName_data\n  }\n  arrival {\n    ...CityName_data\n  }\n  ...FromToIcon_data\n}\n\nfragment SectorDates_data on Sector {\n  departure {\n    ...SectorDate_data\n  }\n  arrival {\n    ...SectorDate_data\n  }\n  duration\n}\n\nfragment SectorDate_data on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment CityName_data on RouteStop {\n  stop {\n    countryFlagURL\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment FromToIcon_data on FromToInterface {\n  __typename\n}\n\nfragment SectorInfo_data on Sector {\n  ...FromTo_data\n  ...SectorDates_data\n}\n\nfragment SectorDetail_data on Sector {\n  ...SectorStopoverDuration_data\n  ...SectorHeader_data\n  segments {\n    id\n    departure {\n      time {\n        local\n      }\n    }\n    arrival {\n      time {\n        local\n      }\n    }\n    ...Segment_data\n  }\n}\n\nfragment SectorStopoverDuration_data on Sector {\n  stopoverDuration\n  departure {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment SectorHeader_data on Sector {\n  duration\n  arrival {\n    stop {\n      city {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment Segment_data on Segment {\n  duration\n  arrival {\n    ...SegmentStopInfo_data\n  }\n  departure {\n    time {\n      local\n    }\n    ...SegmentStopInfo_data\n  }\n  carrier {\n    name\n    code\n  }\n}\n\nfragment SegmentStopInfo_data on RouteStop {\n  time {\n    local\n  }\n  stop {\n    name\n    locationId\n    id\n  }\n}\n\nfragment PassengerForm_itinerary on ItineraryInterface {\n  ...BaggageBundles_itinerary\n}\n\nfragment BaggageBundles_itinerary on ItineraryInterface {\n  holdBagOptions {\n    ...BaggageBundle_bagOption\n  }\n}\n\nfragment BaggageBundle_bagOption on HoldBagOption {\n  quantity\n  dimensions\n  weight\n  price {\n    amount\n    currency\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17c0a6a049e7cec19e2327c9f5d7ecdd';
module.exports = node;
