// @flow

export default [
  {
    id: 'id-1',
    name: 'John',
    lastName: 'Doe',
    gender: 'male',
    nationality: 'Russian',
    dateOfBirth: new Date('1980-04-22'),
    passportId: 'DF45SV8',
    insurance: 'Travel Insurance Name',
    bags: [
      {
        quantity: 1,
        dimensions: '28 x 52 x 78 cm',
        weight: '20 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
    visaRequired: true,
  },
  {
    id: 'id-2',
    name: 'Jana',
    lastName: 'Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: new Date('1980-06-22'),
    passportId: 'DF45SV9',
    insurance: 'Travel Insurance Name',
    bags: [
      {
        quantity: 1,
        dimensions: '11 x 32 x 70 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
    visaRequired: false,
  },
  {
    id: 'id-3',
    name: 'Martin',
    lastName: 'Došek',
    gender: 'male',
    nationality: 'Czech',
    dateOfBirth: new Date('1984-06-12'),
    passportId: 'DF45SV3',
    insurance: 'Travel Insurance Name',
    bags: [
      {
        quantity: 1,
        dimensions: '11 x 32 x 70 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
      {
        quantity: 2,
        dimensions: '40 x 52 x 78 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
  },
];
