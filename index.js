'use strict';

const { readFile, writeFile } = require('fs').promises;
const program = require('commander');
const { version } = require('./package.json');
const options = require('./lib/options');
const getMethod = require('./lib/getMethod');
const getNewVersion = require('./lib/getNewVersion');

program.version(version)
  .description('bump the Major/minor/patch of a package.json');

for (let key of Object.keys(options)) {
  let opt = options[key];
  program.option(opt.flags, opt.description, opt.default);
}

program.parse(process.argv);

module.exports = run;

async function run() {
  const { file, dryrun } = program;
  const pkg = await readFile(file, 'utf-8')
    .then(str => JSON.parse(str))
    .catch(noneSuch, bail);
  const oldVersion = pkg.version;

  if (!oldVersion) {
    console.error(`No old version to bump in ${file}`);
    process.exit(1);
  }

  const method = getMethod(program);
  const newVersion = getNewVersion(oldVersion, method);

  if (dryrun) {
    console.log(`would bump ${oldVersion} to ${newVersion}`);
    process.exit(0);
  }

  pkg.version = newVersion;
  await writeFile(file, JSON.stringify(pkg, null, 2)).then(() => {
    process.exit(0);
  });
}

function noneSuch(e) {
  return e.code === 'ENOENT' && e.errno === -2;
}

function bail() {
  console.error(`The file: ${program.file} does not exist`);
  process.exit(1);
}
