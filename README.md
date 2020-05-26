# bver

This script increments the version in the specified package.json (defaults to ./package.json) by the value specified.

## usage
```
$ bver -h
Usage: bver [options]

bump the version of a package.json

Options:
  -V, --version        output the version number
  -f, --file <string>  the package.json to edit (default: "./package.json")
  -M, --major          bump the major version (default: false)
  -m, --minor          bump the minor version (default: false)
  -p, --patch          bump the patch version (default: false)
  -n, --dryrun         display what would happen without actually doing it (default: false)
  --premajor           bump the pre major version (default: false)
  --preminor           bump the pre minor version (default: false)
  --prepatch           bump the pre patch version (default: false)
  --prerelease         bump the pre release version (default: false)
  -h, --help           display help for command

```

### for example

```
$ cat package.json

{
  "version": "0.2.1"
}

$ bver -m
$

$ cat package.json

{
  "version": "0.3.0"
}
```

### beware

This code **will** overwrite your package.json. In the off chance something goes wrong, have backups, or a repository, something. No further warnings are forthcoming.

