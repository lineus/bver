'use strict';

const assert = require('assert');
const getMethod = require('../../lib/getMethod');

describe('getMethod', () => {
  describe('smoketests', () => {
    it('is a function', () => {
      assert.strictEqual('function', typeof getMethod);
    });
  });
  describe('operation', () => {
    it('throws sans input', () => {
      assert.throws(() => {
        getMethod(null);
      }, /getMethod requires input/);
    });
    it('throws on bad input', () => {
      assert.throws(() => {
        getMethod({});
      }, /getMethod requires one semver property/);
    });
    it('major works', () => {
      const shouldbe = 'major';
      const is = getMethod({ major: true });
      assert.strictEqual(is, shouldbe);
    });
    it('pre-release works', () => {
      const shouldbe = 'prerelease';
      const is = getMethod({ prerelease: true });
      assert.strictEqual(is, shouldbe);
    });
  });
});
