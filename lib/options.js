'use strict';

module.exports = {
  f: {
    flags: '-f, --file <string>',
    description: 'the package.json to edit',
    default: `${process.cwd()}/package.json`,
    semverOpt: false,
    var: 'file'
  },
  M: {
    flags: '-M, --major',
    description: 'bump the major version',
    default: false,
    semverOpt: true,
    var: 'major'
  },
  m: {
    flags: '-m, --minor',
    description: 'bump the minor version',
    default: false,
    semverOpt: true,
    var: 'minor'
  },
  p: {
    flags: '-p, --patch',
    description: 'bump the patch version',
    default: false,
    semverOpt: true,
    var: 'patch'
  },
  n: {
    flags: '-n, --dryrun',
    description: 'display what would happen without actually doing it',
    default: false,
    semverOpt: false,
    var: 'dryrun'
  },
  pM: {
    flags: '--premajor',
    description: 'bump the pre major version',
    default: false,
    semverOpt: true,
    var: 'preMajor'
  },
  pm: {
    flags: '--preminor',
    description: 'bump the pre minor version',
    default: false,
    semverOpt: true,
    var: 'preMinor'
  },
  pp: {
    flags: '--prepatch',
    description: 'bump the pre patch version',
    default: false,
    semverOpt: true,
    var: 'prePatch'
  },
  pr: {
    flags: '--prerelease',
    description: 'bump the pre release version',
    default: false,
    semverOpt: true,
    var: 'preRelease'
  }
};
