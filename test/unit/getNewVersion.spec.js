'use strict';

const assert = require('assert');
const getNewVersion = require('../../lib/getNewVersion');

describe('getNewVersion', () => {
  describe('smoketests', () => {
    it('is a function', () => {
      assert.strictEqual('function', typeof getNewVersion);
    });
    it('throws an error sans version', () => {
      assert.throws(() => {
        getNewVersion(null, 'major');
      }, /getNewVersion requires a version/);
    });
    it('throws an error sans release', () => {
      assert.throws(() => {
        getNewVersion('0.0.1');
      }, /getNewVersion requires a release/);
    });
    it('patch works', () => {
      const shouldbe = '0.0.2';
      const is = getNewVersion('0.0.1', 'patch');
      assert.strictEqual(is, shouldbe);
    });
    it('prerelease works', () => {
      const shouldbe = '1.8.4-0';
      const is = getNewVersion('1.8.3-4', 'prepatch');
      assert.strictEqual(is, shouldbe);
    });
  });
});
