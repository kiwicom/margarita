// @flow

import { createPassengers } from '../helpers';

describe('createPassengers hlper', () => {
  it('should create 3 passengers object', () => {
    const passengers = createPassengers(3);
    expect(passengers).toMatchInlineSnapshot(`
      Array [
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": null,
          "insurance": null,
          "lastName": null,
          "name": null,
          "nationality": null,
          "visaRequired": null,
        },
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": null,
          "insurance": null,
          "lastName": null,
          "name": null,
          "nationality": null,
          "visaRequired": null,
        },
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": null,
          "insurance": null,
          "lastName": null,
          "name": null,
          "nationality": null,
          "visaRequired": null,
        },
      ]
    `);
  });
});
