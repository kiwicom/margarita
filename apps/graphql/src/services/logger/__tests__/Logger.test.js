// @flow

import Logger from '../Logger';

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.resetAllMocks();
});

/* eslint-disable no-console */

it('prints info message', () => {
  Logger.info('Info Message');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log.mock.calls).toMatchSnapshot();
});

it('prints multiline info message', () => {
  Logger.info(`multiline
info
message`);

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log.mock.calls).toMatchSnapshot();
});

it('prints warning message', () => {
  Logger.warning('Warning Message');

  expect(console.warn).toHaveBeenCalledTimes(1);
  expect(console.warn.mock.calls).toMatchSnapshot();
});

it('prints error message', () => {
  Logger.error('Error Message');

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error.mock.calls).toMatchSnapshot();
});

it('is able to handle Error objects', () => {
  Logger.error(new Error('Error Message'));

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error.mock.calls).toMatchSnapshot();
});

it('is able to handle unknown objects without fail', () => {
  Logger.error({
    message: 'Unknown Error Type',
  });

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error.mock.calls).toMatchSnapshot();
});
