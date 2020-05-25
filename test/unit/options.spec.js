'use strict';

const assert = require('assert');
const options = require('../../lib/options');

describe('bver options', () => {
  describe('smoketests', () => {
    it('is an object', () => {
      assert.strictEqual(typeof options, 'object');
    });
  });
  describe('provided options', () => {
    it('dryrun', () => {
      assert.ok(options.n);
    });
    it('file', () => {
      assert.ok(options.f);
    });
    it('Major', () => {
      assert.ok(options.M);
    });
    it('minor', () => {
      assert.ok(options.m);
    });
    it('patch', () => {
      assert.ok(options.p);
    });
    it('premajor', () => {
      assert.ok(options.pM);
    });
    it('preminor', () => {
      assert.ok(options.pm);
    });
    it('prepatch', () => {
      assert.ok(options.pp);
    });
    it('prerelease', () => {
      assert.ok(options.pr);
    });
    it('all options have flags', () => {
      for (let key of Object.keys(options)) {
        let opt = options[key];
        assert.ok(opt.flags && typeof opt.flags === 'string');
      }
    });
    it('all options have descriptions', () => {
      for (let key of Object.keys(options)) {
        let opt = options[key];
        assert.ok(opt.description && typeof opt.description === 'string');
      }
    });
    it('all options have defaults', () => {
      for (let key of Object.keys(options)) {
        let opt = options[key];
        let hasDefault = Object.prototype.hasOwnProperty.call(opt, 'default');
        assert.ok(hasDefault);
      }
    });
    it('all options have semverOpt', () => {
      for (let key of Object.keys(options)) {
        let opt = options[key];
        let hasOpt = Object.prototype.hasOwnProperty.call(opt, 'semverOpt');
        assert.ok(hasOpt);
      }
    });
    it('all options have var property', () => {
      for (let key of Object.keys(options)) {
        let opt = options[key];
        assert.ok(Object.prototype.hasOwnProperty.call(opt, 'var'));
      }
    });
  });
});
