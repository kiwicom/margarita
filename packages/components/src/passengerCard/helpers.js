// @flow

type Gender = 'female' | 'male' | 'other';

export function getPassengerTitle(gender?: ?Gender) {
  switch (gender) {
    case 'male':
      return 'Mr.';
    case 'female':
      return 'Ms.';
    default:
      return '';
  }
}
