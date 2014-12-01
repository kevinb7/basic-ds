#!/bin/sh
./node_modules/.bin/tsc src/basic.ts --outDir lib --out lib/basic.js --target ES5 --declaration --module commonjs --removeComments &&
echo "module.exports = basic;" >> lib/basic.js &&
mkdir -p dist &&
./node_modules/.bin/browserify lib/basic.js --standalone basic --outfile dist/basic.js
