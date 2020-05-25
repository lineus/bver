# bver

This script increments the version in the specified package.json (defaults to ./package.json) by the value specified.

### for example

```
$ cat package.json
{
  "version": "0.2.1"
}
$bver -m
$cat package.json
{
  "version": "0.3.0"
}
```

### beware

This code **will** overwrite your package.json. In the off chance something goes wrong, it's a good idea to have backups. No further warnings are forthcoming.

