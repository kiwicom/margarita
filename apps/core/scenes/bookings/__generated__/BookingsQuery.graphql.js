/**
 * @flow
 * @relayHash d0fb6a952205fd9d1fa15d4048713629
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingList_data$ref = any;
export type BookingsQueryVariables = {||};
export type BookingsQueryResponse = {|
  +customerBookings: ?{|
    +$fragmentRefs: BookingList_data$ref
  |}
|};
export type BookingsQuery = {|
  variables: BookingsQueryVariables,
  response: BookingsQueryResponse,
|};
*/


/*
query BookingsQuery {
  customerBookings {
    ...BookingList_data
  }
}

fragment BookingList_data on BookingInterfaceConnection {
  edges {
    node {
      __typename
      id(opaque: false)
      ...Booking_data
    }
  }
}

fragment Booking_data on BookingInterface {
  destinationImageUrl(dimensions: _1200x628)
  relayId: id
  ...BookingBadges_data
  ...FromTo_data
  ...DateAndPassengerCount_data
}

fragment BookingBadges_data on BookingInterface {
  id(opaque: false)
  status
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

fragment DateAndPassengerCount_data on BookingInterface {
  passengerCount
  departure {
    time {
      local
    }
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
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
        (v0/*: any*/)
      ]
    },
    (v0/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BookingList_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingInterfaceEdge",
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
                    "name": "destinationImageUrl",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "dimensions",
                        "value": "_1200x628"
                      }
                    ],
                    "storageKey": "destinationImageUrl(dimensions:\"_1200x628\")"
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "relayId",
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
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
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "passengerCount",
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
    "name": "BookingsQuery",
    "id": null,
    "text": "query BookingsQuery {\n  customerBookings {\n    ...BookingList_data\n  }\n}\n\nfragment BookingList_data on BookingInterfaceConnection {\n  edges {\n    node {\n      __typename\n      id(opaque: false)\n      ...Booking_data\n    }\n  }\n}\n\nfragment Booking_data on BookingInterface {\n  destinationImageUrl(dimensions: _1200x628)\n  relayId: id\n  ...BookingBadges_data\n  ...FromTo_data\n  ...DateAndPassengerCount_data\n}\n\nfragment BookingBadges_data on BookingInterface {\n  id(opaque: false)\n  status\n}\n\nfragment FromTo_data on FromToInterface {\n  departure {\n    ...CityName_data\n  }\n  arrival {\n    ...CityName_data\n  }\n  ...FromToIcon_data\n}\n\nfragment DateAndPassengerCount_data on BookingInterface {\n  passengerCount\n  departure {\n    time {\n      local\n    }\n  }\n}\n\nfragment CityName_data on RouteStop {\n  stop {\n    countryFlagURL\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment FromToIcon_data on FromToInterface {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dad96aa516319b8cc7f9be86917376d8';
module.exports = node;
