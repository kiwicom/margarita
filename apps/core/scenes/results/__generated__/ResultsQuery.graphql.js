/**
 * @flow
 * @relayHash ba25d1f388f09006db1203e13adff049
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultsList$ref = any;
export type ItinerariesSearchInput = {
  travelFrom: string,
  travelTo?: ?string,
  dateFrom: any,
  dateTo?: ?any,
  returnDateFrom?: ?any,
  returnDateTo?: ?any,
  passengers?: ?PassengersInput,
};
export type PassengersInput = {
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
};
export type ResultsQueryVariables = {|
  input: ItinerariesSearchInput
|};
export type ResultsQueryResponse = {|
  +searchItineraries: ?{|
    +$fragmentRefs: ResultsList$ref
  |}
|};
export type ResultsQuery = {|
  variables: ResultsQueryVariables,
  response: ResultsQueryResponse,
|};
*/


/*
query ResultsQuery(
  $input: ItinerariesSearchInput!
) {
  searchItineraries(input: $input) {
    ...ResultsList
  }
}

fragment ResultsList on ItineraryConnection {
  edges {
    node {
      id
      ...ResultsListItem
    }
  }
}

fragment ResultsListItem on Itinerary {
  price
  flyFrom
  flyTo
  localDeparture
  localArrival
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItinerariesSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ItinerariesSearchInput!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ResultsQuery",
  "id": null,
  "text": "query ResultsQuery(\n  $input: ItinerariesSearchInput!\n) {\n  searchItineraries(input: $input) {\n    ...ResultsList\n  }\n}\n\nfragment ResultsList on ItineraryConnection {\n  edges {\n    node {\n      id\n      ...ResultsListItem\n    }\n  }\n}\n\nfragment ResultsListItem on Itinerary {\n  price\n  flyFrom\n  flyTo\n  localDeparture\n  localArrival\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ResultsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchItineraries",
        "storageKey": null,
        "args": v1,
        "concreteType": "ItineraryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ResultsList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchItineraries",
        "storageKey": null,
        "args": v1,
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "flyFrom",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "flyTo",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "localDeparture",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "localArrival",
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9c7f8976ed7af754f40bc050b2ebf86d';
module.exports = node;
