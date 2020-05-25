'use strict';

const { getSemVerOpts } = require('./utils');
const inc = require('semver/functions/inc');

const opts = getSemVerOpts();

module.exports = function getNewVersion(version, release) {
  if (!version) {
    throw new Error('getNewVersion requires a version');
  }

  if (!release) {
    throw new Error('getNewVersion requires a release');
  }

  return inc(version, release);
};
