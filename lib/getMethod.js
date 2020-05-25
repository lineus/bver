'use strict';

const { getSemVerOpts } = require('./utils');

const semverOpts = getSemVerOpts();

module.exports = function getMethod(program) {
  if (!program) {
    throw new Error('getMethod requires input');
  }

  const index = semverOpts.findIndex(opt => program[opt] === true);

  if (index < 0) {
    throw new Error('getMethod requires one semver property');
  }

  return semverOpts[index];
};
