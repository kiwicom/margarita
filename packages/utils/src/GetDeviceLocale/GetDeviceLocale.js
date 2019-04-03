// @flow strict

export const getLocaleDashed = () =>
  (typeof window !== 'undefined' && window?.navigator?.language) || 'en-GB';
