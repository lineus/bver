'use strict';

const options = require('./options');

function getSemVerOpts() {
  let ret = [];
  for (let key of Object.keys(options)) {
    if (options[key].semverOpt) {
      ret.push(options[key].var.toLowerCase());
    }
  }
  return ret;
}

module.exports = {
  getSemVerOpts
};
