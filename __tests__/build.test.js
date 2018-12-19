// @flow

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const rimraf = require('rimraf');

const exec = (command, options) =>
  childProcess.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const libPath = path.join(__dirname, '..', 'lib');
const getPath = (extraPath: string) => path.join(libPath, extraPath);

afterAll(() => {
  // Clean up
  rimraf.sync(libPath);
});

it('checks the build command to generate lib/', () => {
  rimraf.sync(libPath);

  expect(fs.existsSync(libPath)).toEqual(false);
  exec('yarn build');

  const [files] = fs.readdirSync(libPath);

  expect(files).toHaveLength(5);
  expect(fs.existsSync(getPath('index.js'))).toEqual(true);
  expect(fs.existsSync(getPath('index.native.js'))).toEqual(true);
  expect(fs.existsSync(getPath('fonts'))).toEqual(true);
  expect(fs.existsSync(getPath('native'))).toEqual(true);
  expect(fs.existsSync(getPath('web'))).toEqual(true);
});
