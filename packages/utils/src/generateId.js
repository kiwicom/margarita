// @flow

import uuidv4 from 'uuid/v4';

export function generateId(): string {
  return uuidv4();
}
