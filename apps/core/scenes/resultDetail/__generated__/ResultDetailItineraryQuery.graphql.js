/**
 * @flow
 * @relayHash 8077d342b3287f219eec44fc42b6e0e0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultDetailItinerary_data$ref = any;
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
export type ResultDetailItineraryQueryVariables = {|
  input: ItineraryCheckInput
|};
export type ResultDetailItineraryQueryResponse = {|
  +$fragmentRefs: ResultDetailItinerary_data$ref
|};
export type ResultDetailItineraryQuery = {|
  variables: ResultDetailItineraryQueryVariables,
  response: ResultDetailItineraryQueryResponse,
|};
*/


/*
query ResultDetailItineraryQuery(
  $input: ItineraryCheckInput!
) {
  ...ResultDetailItinerary_data_2VV6jB
}

fragment ResultDetailItinerary_data_2VV6jB on RootQuery {
  checkItinerary(input: $input) {
    __typename
    isChecked
    isValid
    id
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResultDetailItineraryQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ResultDetailItinerary_data",
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultDetailItineraryQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "checkItinerary",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ItineraryCheckInput!"
          }
        ],
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ResultDetailItineraryQuery",
    "id": null,
    "text": "query ResultDetailItineraryQuery(\n  $input: ItineraryCheckInput!\n) {\n  ...ResultDetailItinerary_data_2VV6jB\n}\n\nfragment ResultDetailItinerary_data_2VV6jB on RootQuery {\n  checkItinerary(input: $input) {\n    __typename\n    isChecked\n    isValid\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef4fa29548c39001074fabbcfb9aa269';
module.exports = node;
