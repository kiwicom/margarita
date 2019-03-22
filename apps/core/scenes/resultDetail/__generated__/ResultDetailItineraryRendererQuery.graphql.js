/**
 * @flow
 * @relayHash 77159d29e78c40068a5a5d009f057aec
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
export type ResultDetailItineraryRendererQueryVariables = {|
  input: ItineraryCheckInput
|};
export type ResultDetailItineraryRendererQueryResponse = {|
  +$fragmentRefs: ResultDetailItinerary_data$ref
|};
export type ResultDetailItineraryRendererQuery = {|
  variables: ResultDetailItineraryRendererQueryVariables,
  response: ResultDetailItineraryRendererQueryResponse,
|};
*/


/*
query ResultDetailItineraryRendererQuery(
  $input: ItineraryCheckInput!
) {
  ...ResultDetailItinerary_data_2VV6jB
}

fragment ResultDetailItinerary_data_2VV6jB on RootQuery {
  checkItinerary(input: $input) {
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
    "name": "ResultDetailItineraryRendererQuery",
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
    "name": "ResultDetailItineraryRendererQuery",
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
        "concreteType": "Itinerary",
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
    "name": "ResultDetailItineraryRendererQuery",
    "id": null,
    "text": "query ResultDetailItineraryRendererQuery(\n  $input: ItineraryCheckInput!\n) {\n  ...ResultDetailItinerary_data_2VV6jB\n}\n\nfragment ResultDetailItinerary_data_2VV6jB on RootQuery {\n  checkItinerary(input: $input) {\n    isChecked\n    isValid\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5a1a7ada46dce3d39027a9adfdba8a1';
module.exports = node;
