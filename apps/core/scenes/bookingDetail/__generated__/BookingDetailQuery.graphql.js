/**
 * @flow
 * @relayHash 538ba0e606defe8aafd23c3ba6165f46
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
}

fragment TripDetails on BookingInterface {
  ...Header
  ...TripInfo
}

fragment Header on BookingInterface {
  bookingId: id(opaque: false)
  status
}

fragment TripInfo on BookingInterface {
  ...FromTo
}

fragment FromTo on BookingInterface {
  departure {
    ...CityName
  }
  arrival {
    ...CityName
  }
  ...FromToIcon
}

fragment CityName on RouteStop {
  cityName
  airport {
    countryFlagURL
    id
  }
}

fragment FromToIcon on BookingInterface {
  type
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityName",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
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
      v2
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingDetailQuery",
  "id": null,
  "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    __typename\n    ...BookingDetailWrapper\n    id\n  }\n}\n\nfragment BookingDetailWrapper on BookingInterface {\n  ...TripDetails\n}\n\nfragment TripDetails on BookingInterface {\n  ...Header\n  ...TripInfo\n}\n\nfragment Header on BookingInterface {\n  bookingId: id(opaque: false)\n  status\n}\n\nfragment TripInfo on BookingInterface {\n  ...FromTo\n}\n\nfragment FromTo on BookingInterface {\n  departure {\n    ...CityName\n  }\n  arrival {\n    ...CityName\n  }\n  ...FromToIcon\n}\n\nfragment CityName on RouteStop {\n  cityName\n  airport {\n    countryFlagURL\n    id\n  }\n}\n\nfragment FromToIcon on BookingInterface {\n  type\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": v1,
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
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": v1,
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "departure",
            "storageKey": null,
            "args": null,
            "concreteType": "RouteStop",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "arrival",
            "storageKey": null,
            "args": null,
            "concreteType": "RouteStop",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bab57d93afd1e0305918568883c4fc6';
module.exports = node;
