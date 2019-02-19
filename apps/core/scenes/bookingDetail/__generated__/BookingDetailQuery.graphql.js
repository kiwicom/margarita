/**
 * @flow
 * @relayHash 579ccbe4711feb0834e6046448b887a0
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
  ...TripDetails
  ...Passengers
}

fragment TripDetails on BookingInterface {
  ...Header
  ...TripInfoOneWay
  ...TripInfoMulticity
  ...TripInfoReturn
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

fragment Header on BookingInterface {
  bookingId: id(opaque: false)
  status
}

fragment TripInfoOneWay on BookingInterface {
  ... on BookingOneWay {
    sector {
      ...TripInfo
    }
  }
}

fragment TripInfoMulticity on BookingInterface {
  ... on BookingMulticity {
    sectors {
      ...TripInfo
    }
  }
}

fragment TripInfoReturn on BookingInterface {
  ... on BookingReturn {
    ...FromTo
    inbound {
      ...TripDates
    }
    outbound {
      ...TripDates
    }
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

fragment TripDates on Sector {
  departure {
    ...TripDate
  }
  arrival {
    ...TripDate
  }
  duration
}

fragment TripDate on RouteStop {
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

fragment TripInfo on Sector {
  ...FromTo
  ...TripDates
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
  (v7/*: any*/)
],
v9 = [
  (v4/*: any*/)
],
v10 = [
  (v5/*: any*/)
],
v11 = [
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
  (v7/*: any*/)
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
                "selections": (v8/*: any*/)
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
                "selections": (v8/*: any*/)
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
                "selections": (v9/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v9/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v11/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Sector",
                "plural": false,
                "selections": (v11/*: any*/)
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
    "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    __typename\n    ...BookingDetailWrapper\n    id\n  }\n}\n\nfragment BookingDetailWrapper on BookingInterface {\n  ...TripDetails\n  ...Passengers\n}\n\nfragment TripDetails on BookingInterface {\n  ...Header\n  ...TripInfoOneWay\n  ...TripInfoMulticity\n  ...TripInfoReturn\n  type\n}\n\nfragment Passengers on BookingInterface {\n  ...PassengersList\n  ...VisaDetail\n}\n\nfragment PassengersList on BookingInterface {\n  passengers {\n    id\n    ...Passenger\n  }\n}\n\nfragment VisaDetail on BookingInterface {\n  passengers {\n    visaRequired\n    id\n  }\n}\n\nfragment Passenger on Passenger {\n  title\n  firstname\n  lastname\n  birthday\n}\n\nfragment Header on BookingInterface {\n  bookingId: id(opaque: false)\n  status\n}\n\nfragment TripInfoOneWay on BookingInterface {\n  ... on BookingOneWay {\n    sector {\n      ...TripInfo\n    }\n  }\n}\n\nfragment TripInfoMulticity on BookingInterface {\n  ... on BookingMulticity {\n    sectors {\n      ...TripInfo\n    }\n  }\n}\n\nfragment TripInfoReturn on BookingInterface {\n  ... on BookingReturn {\n    ...FromTo\n    inbound {\n      ...TripDates\n    }\n    outbound {\n      ...TripDates\n    }\n  }\n}\n\nfragment FromTo on FromToInterface {\n  departure {\n    ...CityName\n  }\n  arrival {\n    ...CityName\n  }\n  ...FromToIcon\n}\n\nfragment TripDates on Sector {\n  departure {\n    ...TripDate\n  }\n  arrival {\n    ...TripDate\n  }\n  duration\n}\n\nfragment TripDate on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment CityName on RouteStop {\n  stop {\n    countryFlagURL\n    city {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment FromToIcon on FromToInterface {\n  type\n}\n\nfragment TripInfo on Sector {\n  ...FromTo\n  ...TripDates\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bab57d93afd1e0305918568883c4fc6';
module.exports = node;
