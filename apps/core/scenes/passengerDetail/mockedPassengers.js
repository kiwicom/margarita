// @flow

export default [
  {
    name: 'John',
    lastName: 'Doe',
    gender: 'male',
    nationality: 'Russian',
    dateOfBirth: new Date('1980-04-22'),
    id: 'DF45SV8',
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
    name: 'Jana',
    lastName: 'Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: new Date('1980-06-22'),
    id: 'DF45SV9',
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
    name: 'Martin',
    lastName: 'Došek',
    gender: 'male',
    nationality: 'Czech',
    dateOfBirth: new Date('1984-06-12'),
    id: 'DF45SV3',
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
