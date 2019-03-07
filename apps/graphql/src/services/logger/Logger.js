// @flow

import chalkNode from 'chalk';

let chalk = chalkNode;

if (process.env.NODE_ENV === 'test') {
  // enable/disable Chalk base on enviroment
  chalk = chalkNode.constructor({ enabled: true });
}
const prefix = '>';

export function formatMessage(message: string | Object): string {
  let newMessage = message;
  if (message instanceof Error) {
    newMessage = message.message;
  } else if (typeof message === 'object') {
    newMessage = JSON.stringify(message, null, 2);
  }
  return newMessage.replace(/\n/g, '\n   ');
}

const info = (message: string | Object): void => {
  console.log(prefix + chalk.blue(' info ') + formatMessage(message)); // eslint-disable-line no-console
};

const warning = (message: string | Object): void => {
  console.warn(prefix + chalk.yellow(' warn ') + formatMessage(message)); // eslint-disable-line no-console
};

const error = (message: string | Object): void => {
  console.error(prefix + chalk.red.bold(' error ') + formatMessage(message)); // eslint-disable-line no-console
};

const Logger = {
  info,
  warning,
  error,
};

export default Logger;
