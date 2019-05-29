// @flow

type Gender = 'female' | 'male' | 'other';

export function getTitle(gender?: Gender) {
  switch (gender) {
    case 'male':
      return 'Mr.';
    case 'female':
      return 'Ms.';
    default:
      return '';
  }
}
