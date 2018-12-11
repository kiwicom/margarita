/**
 * @flow
 * @relayHash fcf0fb024edb4b9cf5a0db471e18889e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PlacePickerScreenQueryVariables = {||};
export type PlacePickerScreenQueryResponse = {|
  +id: string,
  +hello: ?string,
|};
export type PlacePickerScreenQuery = {|
  variables: PlacePickerScreenQueryVariables,
  response: PlacePickerScreenQueryResponse,
|};
*/


/*
query PlacePickerScreenQuery {
  id
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "name": "hello",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlacePickerScreenQuery",
  "id": null,
  "text": "query PlacePickerScreenQuery {\n  id\n  hello\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a352dda5b30619acb9e12846deb2a38a';
module.exports = node;
