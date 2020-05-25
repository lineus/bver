'use strict';

const assert = require('assert');
const { getSemVerOpts } = require('../../lib/utils');

describe('utils', () => {
  describe('getSemVerOpts', () => {
    it('smoketests', () => {
      assert.strictEqual('function', typeof getSemVerOpts);
    });
    it('works', () => {
      const shouldbe = [
        'major',
        'minor',
        'patch',
        'premajor',
        'preminor',
        'prepatch',
        'prerelease'
      ];
      const is = getSemVerOpts();
      assert.deepEqual(is, shouldbe);
    });
  });
});
